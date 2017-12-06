import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import ModalDropdown from 'react-native-modal-dropdown';
import { connect } from "react-redux";

import { Card, CardSection, Button, Input, Spinner, DoubleInput, Confirm } from "./common";
import {
  aptChanged,
  dongChanged,
  hosuChanged,
  dongAuthChanged,
  nicknameChanged,
  emailChanged,
  passwordChanged,
  passwordCheckChanged,
  signInUser
} from "../actions";

class Authentication extends Component {
  state = { checked: false, showModal: false, dongAuthCheck: false, domain: 'default.com' };

  //TEMPORARY
  onAptChange(text) {
    this.props.aptChanged(text);
  }
  //TEMPORARY END

  onDongChange(text) {
    this.props.dongChanged(text);
  }
  onHosuChange(text) {
    this.props.hosuChanged(text);
  }
  onDongAuthChange(text) {
    this.props.dongAuthChanged(text);
  }
  onNicknameChange(text) {
    this.props.nicknameChanged(text);
  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onPasswordCheckChange(text) {
    this.props.passwordCheckChanged(text);
  }

  onAccept() {
    this.setState({ checked: true, showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  onButtonPress() {
    const {
      apt,
      dong,
      hosu,
      dong_auth,
      nickname,
      email,
      password,
      password_check
    } = this.props;
    if (password === password_check) {
      if (this.state.dongAuthCheck) {
        if (this.state.checked) {
          this.props.signInUser({ apt, dong, hosu, nickname, email: email.concat("@").concat(this.state.domain), password });
        } else {
          this.setState({ showModal: true });
        }
      }
    }
  }

  dongAuthCheck() {
    if (this.props.dong_auth === this.props.dong.concat("000")) {
      this.state.dongAuthCheck = true;
      return <Text style={{ color: "green" }}> 인증에 성공하였습니다 </Text>;
    } else {
      this.state.dongAuthCheck = false;
      return (
        <Text style={{ color: "red" }}> 인증에 실패하였습니다 </Text>
      );
    }
  }

  passwordCheck() {
    if (this.props.password === this.props.password_check) {
      return <Text style={{ color: "green" }}> 비밀번호가 일치합니다 </Text>;
    } else {
      return (
        <Text style={{ color: "red" }}> 비밀번호가 일치하지 않습니다 </Text>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>시작하기</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: '#f9f7e2', flex: 1 }}>

        <Text style={styles.titleText}>주거 정보</Text>
        <Card style={{ backgroundColor: '#eeeeee', marginTop: 3 }} >
          <CardSection>
            <Input
              label="아파트"
              placeholder="제기동 한신아파트"
              value={this.props.apt}
              onChangeText={this.onAptChange.bind(this)}
            />
          </CardSection>

          <CardSection>
            <DoubleInput
              label1="동"
              placeholder1="101"
              value1={this.props.dong}
              onChangeText1={this.onDongChange.bind(this)}

              label2="호수"
              placeholder2="101"
              value2={this.props.hosu}
              onChangeText2={this.onHosuChange.bind(this)}
            />
          </CardSection>

          <CardSection>
            <Input
              label="동 인증"
              placeholder="배부된 인증번호 입력"
              value={this.props.dong_auth}
              onChangeText={this.onDongAuthChange.bind(this)}
            />
          </CardSection>
          <CardSection style={{ justifyContent: "center" }}>
            {this.dongAuthCheck()}
          </CardSection>
        </Card>

        <Text style={styles.titleText}>로그인 정보</Text>
        <Card style={{ backgroundColor: '#eeeeee', marginTop: 3 }}>
          <CardSection>
            <Input
              label="닉네임"
              placeholder="홍길동"
              value={this.props.nickname}
              onChangeText={this.onNicknameChange.bind(this)}
            />
          </CardSection>

          <CardSection style={{ alignItems: 'center' }}>
            <Input
              inputStyle={{ marginRight: 0, flex: 1.5 }}
              label="이메일"
              placeholder="email@gmail.com"
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
            />
            <Text style={{ fontSize: 18 }}> @ </Text>
            <ModalDropdown
              textStyle={{ fontSize: 18 }}
              style={{
                marginRight: 9,
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 3,
                borderWidth: 1,
              }}
              options={['naver.com', 'gmail.com', 'hanmail.net', 'daum.net', 'korea.ac.kr']}
              defaultValue='이메일 선택'
              onSelect={(idx, value) => this.setState({ domain: value })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="비밀번호"
              placeholder="6자 이상 입력"
              secureTextEntry
              value={this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}
            />
          </CardSection>

          <CardSection>
            <Input
              label="비밀번호 확인"
              secureTextEntry
              value={this.props.password_check}
              onChangeText={this.onPasswordCheckChange.bind(this)}
            />
          </CardSection>
          <CardSection style={{ justifyContent: "center" }}>
            {this.passwordCheck()}
          </CardSection>
        </Card>

        <CheckBox
          title="약관과 개인정보 수집 및 이용에 대해 동의합니다"
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
        {this.renderButton()}

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          약관에 동의해주세요
        </Confirm>

      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    apt,
    dong,
    hosu,
    dong_auth,
    nickname,
    email,
    password,
    password_check,
    loading
  } = state.auth;

  return {
    apt,
    dong,
    hosu,
    dong_auth,
    nickname,
    email,
    password,
    password_check,
    loading
  };
};

const mapDispatchToProps = {
  aptChanged,
  dongChanged,
  hosuChanged,
  dongAuthChanged,
  nicknameChanged,
  emailChanged,
  passwordChanged,
  passwordCheckChanged,
  signInUser
};

const styles = {
  titleText: {
    paddingTop: 5,
    paddingLeft: 15,
    fontSize: 16,
    color: '#787772',
    fontWeight: 'bold'
  },

  buttonTextStyle: {
    color: "white",
    fontSize: 25,
    fontWeight: "500"
  },

  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "55%",
    height: "7%",
    alignSelf: "center",
    backgroundColor: "rgba(250, 220, 50, 1.0)",
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
