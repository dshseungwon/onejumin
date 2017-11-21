import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class Intro extends Component {

  render() {
    return (
      <Card>

        <CardSection>
          <Text> 원주민에 오신걸 환영합니다! </Text>
        </CardSection>

        <CardSection>
          <Button onPress={Actions.auth}>
            원주민 시작하기
          </Button>
        </CardSection>

      </Card>
      );
    }


}

export default Intro;
