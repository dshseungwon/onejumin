import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import CommentList from './CommentList';
import { commentPush } from '../actions';
import { Button, Card, CardSection } from './common';

class ContentView extends Component {

  state = { content: '' };

  onContentChange(text) {
    this.setState({ content: text });
  }
  
  onSendPressed() {
    const category = this.props.category;
    this.props.commentPush(category, this.props.post.postId, this.state, this.props.post.numComments);
    this.setState({ content: '' });
  }

  render() {
    return (
      <Card >

        <CardSection>
          <Text> {this.props.post.title} </Text>
        </CardSection>

        <CardSection>
          <Text> {this.props.post.content} </Text>
        </CardSection>

        <CardSection style={{ height: 100 }}>
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
          <Button onPress={this.onSendPressed.bind(this)}>코멘트 전송</Button>
        </CardSection>

        <CardSection>
          <CommentList category={this.props.category} postId={this.props.post.postId} />
        </CardSection>

      </Card>
    );
  }
}

export default connect(null, { commentPush })(ContentView);
