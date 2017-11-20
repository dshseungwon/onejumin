import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button, Card, CardSection } from '../common';

class Main extends Component {

  componentWillMount() {
        Actions.refresh({
            title: '$아파트이름',
            component: { Main },
            rightTitle: '쪽지',
            onRight: () => { Actions.message(); }
        });
    }

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

export default Main;
