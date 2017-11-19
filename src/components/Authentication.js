import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
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
} from '../actions';

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
  onEmailChange(text){
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
    this.props.passwordChanged(text);
  }
  onPasswordCheckChange(text){
    this.props.passwordCheckChanged(text);
  }

  onButtonPress(){
    const { apt, dong, hosu, dong_auth, nickname, email, password, password_check } = this.props;
    if(password === password_check){
      this.props.signInUser({ apt, dong, hosu, nickname, email, password });
    }
  }

  passwordCheck(){
    if(this.props.password === this.props.password_check){
      return (
        <Text style={{color:'green'}}> 비밀번호가 일치합니다 </Text>
      );
    } else {
      return (
        <Text style={{color:'red'}}> 비밀번호가 일치하지 않습니다 </Text>
      );
    }
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
            label="이메일"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
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
          {this.passwordCheck()}
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }

}

const mapStateToProps =( state ) => {
  const { apt, dong, hosu, dong_auth, nickname, email, password, password_check, loading } = state.auth;

  return { apt, dong, hosu, dong_auth, nickname, email, password, password_check, loading };
};

const mapDispatchToProps ={
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

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
