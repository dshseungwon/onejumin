import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import { HomeIcon } from '../common';

import HomeNotice from './HomeNotice';

import MsgRecvButton from './MsgRecvButton';
import MsgSendButton from './MsgSendButton';


/* 

  아파트이름으로 초기화 하고 싶다면

  componentWillMount() {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/apt`).once('value').then((snapshot) => {
      const apt = snapshot.val();

        Actions.refresh({
            title: `${apt}`
        }); 
      });
  }
*/

class Main extends Component {

  render() {
    return (
      <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, paddingTop: 10, paddingBottom: 10, backgroundColor: '#f9f8e9' }} >

        <View style={{ marginLeft: 5, marginRight: 2, marginTop: 10, marginBottom: 15, alignItems: 'stretch', justifyContent: 'space-around', flexDirection: 'row' }}>
          <HomeNotice 
            onPress={Actions.notice}
            iconName='ios-information-circle-outline'
            style={{ backgroundColor: '#fcea95' }}
          />
          <View style={{ flexDirection: 'column' }}>
            <MsgRecvButton 
              onPress={Actions.msgRecv}
              iconName='ios-mail-outline'
              style={{ backgroundColor: '#fcea95' }}
            />
            <MsgSendButton
              onPress={Actions.msgSend}
              iconName='ios-paper-plane-outline'
              style={{ backgroundColor: '#fcea95' }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-around',
            marginBottom: 5
          }}
        >

          <HomeIcon
            onPress={Actions.notice}
            iconName='ios-megaphone-outline'
            style={{ backgroundColor: '#a5cbab' }}
          >
            공지사항
          </HomeIcon>

          <HomeIcon
            onPress={Actions.notice}
            iconName='ios-construct-outline'
            style={{ backgroundColor: '#b4ceee' }}
          >
            건의사항
          </HomeIcon>

          <HomeIcon
            onPress={Actions.notice}
            iconName='ios-chatboxes-outline'
            style={{ backgroundColor: '#fcc4ce' }}
          >
            자유게시판
          </HomeIcon>

        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-around',
            marginBottom: 5
          }}
        >

          <HomeIcon
            onPress={Actions.notice}
            iconName='ios-people-outline'
            style={{ backgroundColor: '#d9c3e1' }}
          >
            지역게시판
          </HomeIcon>

          <HomeIcon
            onPress={Actions.notice}
            iconName='ios-cart-outline'
            style={{ backgroundColor: '#f7ccaa' }}
          >
            벼룩시장
          </HomeIcon>

          <HomeIcon
            onPress={Actions.notice}
            iconName='ios-thumbs-up-outline'
            style={{ backgroundColor: '#b1b0a7' }}
          >
            주민투표
          </HomeIcon>

        </View>

      </View>
      );
    }


}

export default Main;
