import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import { Button, Card, CardSection } from '../common';


class Main extends Component {

  componentWillMount() {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/apt`).once('value').then((snapshot) => {
      const apt = snapshot.val();

        Actions.refresh({
            title: `${apt}`
        }); 
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


        <CardSection>
          <Button onPress={Actions.notice}>
            공지사항
          </Button>
        </CardSection>

      </Card>
      );
    }


}

export default Main;
