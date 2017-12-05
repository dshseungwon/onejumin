import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { postPush } from '../../actions';
import { Button, Input, Card, CardSection } from '../common';

class NoticeWrite extends Component {

  state = { title: '', content: '', time: '' };

  componentDidMount() {
    this.setState({
      time: new Date().toLocaleString('ko-KR')
    });
  }

  onTitleChange(text) {
    this.setState({ title: text });
  }

  onContentChange(text) {
    this.setState({ content: text });
  }
  
  
  onSendPressed() {
    this.setState({
      time: new Date().toLocaleString('ko-KR')
    });
    this.NoticePush();
    Actions.pop();
  }

  NoticePush() {
    const category = this.props.category;
    this.props.postPush(category, this.state);
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

export default connect(null, { postPush })(NoticeWrite);
