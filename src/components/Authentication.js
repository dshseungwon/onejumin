import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { aptChanged, dongChanged, hosuChanged, dongAuthChanged, nicknameChanged, passwordChanged, passwordCheckChanged, signInUser } from '../actions';

class Authentication extends Component {

  //TEMPORARY
  onAptChange(text){
    this.props.aptChanged(text);
  }
  //TEMPORARY END

  onDongChange(text){
    this.props.dongChanged(text);
  }
  onHosuChange(text){
    this.props.hosuChanged(text);
  }
  onDongAuthChange(text){
    this.props.dongAuthChanged(text);
  }
  onNicknameChange(text){
    this.props.nicknameChanged(text);
  }
  onPasswordChange(text){
    this.props.passwordChanged(text);
  }
  onPasswordCheckChange(text){
    this.props.passwordCheckChanged(text);
  }

  onButtonPress(){
    const { apt, dong, hosu, dong_auth, nickname } = this.props;

    this.props.signInUser({ apt, dong, hosu, dong_auth, nickname });
  }

  renderButton(){
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        원주민 시작하기
      </Button>
    );
  }



  render () {
    return(

      <Card>

        <CardSection>
          <Input
            label="아파트"
            placeholder="제기동 한신아파트"
            value={this.props.apt}
            onChangeText={this.onAptChange.bind(this)}
          />
        </CardSection>

          <CardSection>
            <Input
              label="동"
              placeholder="101동"
              value={this.props.dong}
              onChangeText={this.onDongChange.bind(this)}
            />
          </CardSection>

          <CardSection>
            <Input
              label="호수"
              placeholder="101호"
              value={this.props.hosu}
              onChangeText={this.onHosuChange.bind(this)}
            />
          </CardSection>

        <CardSection>
          <Input
            label="동 인증"
            value={this.props.dong_auth}
            onChangeText={this.onDongAuthChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="닉네임"
            value={this.props.nickname}
            onChangeText={this.onNicknameChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="비밀번호"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="비밀번호 확인"
            value={this.props.password_check}
            onChangeText={this.onPasswordCheckChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }

}

const mapStateToProps =( state ) => {
  const { apt, dong, hosu, dong_auth, nickname, password, password_check, loading } = state.auth;

  return { apt, dong, hosu, dong_auth, nickname, password, password_check, loading };
};

const mapDispatchToProps ={
  aptChanged,
  dongChanged,
  hosuChanged,
  dongAuthChanged,
  nicknameChanged,
  passwordChanged,
  passwordCheckChanged,
  signInUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
