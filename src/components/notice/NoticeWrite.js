import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { Button, Input, Card, CardSection } from '../common';

class NoticeWrite extends Component {

  state = { title: '', content: '' };

  onTitleChange(text) {
    this.setState({ title: text });
  }

  onContentChange(text) {
    this.setState({ content: text });
  }
  
  
  onSendPressed() {
    this.NoticePush();
    Actions.pop();
  }

  NoticePush() {
    const uid = firebase.auth().currentUser.uid;
    const { title, content } = this.state;
    const category = this.props.category;
  
    firebase.database().ref(`/users/${uid}`).once('value').then((userSnap) => {
      const apt = userSnap.val().apt;

      firebase.database().ref(`/apts/${apt}/${category}`)
       .push().set({ title, content })
       .then(() => {
         console.log('Notice push successed!');
       });
      });
  }

  render() {
    return (
      <Card >
        <CardSection style={{ height: 100 }}>
          <View style={{ flex: 1 }}>
            <TextInput
              multiline
              placeholder='제목'
              autoCorrect={false}
              value={this.state.title}
              onChangeText={this.onTitleChange.bind(this)}
            />
          </View>
        </CardSection>

        <CardSection style={{ height: 300 }}>
          <View style={{ flex: 1 }}>
            <TextInput
              multiline
              placeholder='내용'
              autoCorrect={false}
              value={this.state.content}
              onChangeText={this.onContentChange.bind(this)}
            />
          </View>
        </CardSection>
        <CardSection>
          <Button onPress={this.onSendPressed.bind(this)}>전송</Button>
        </CardSection>
      </Card>
    );
  }
}

export default NoticeWrite;
