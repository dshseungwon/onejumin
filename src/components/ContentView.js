import React, { Component } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
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

  imageCheck() {
    if (this.props.post.numImage !== 0) {
      return this.props.post.images.map(x =>
        <Image key={x.uri} source={x} style={{ width: 100, height: 100, marginTop: 5, marginBottom: 5, marginRight: 5 }} />
      );
    } else {
      return;
    }
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

        <CardSection>
          <View style={{ flex: 1 }}>
            <TextInput
              multiline
              placeholder='내용'
              autoCorrect={false}
              value={this.state.content}
              onChangeText={this.onContentChange.bind(this)}
              style={{ height: 100 }}
            />
          </View>
        </CardSection>

        <CardSection>
          <ScrollView horizontal>
            {this.imageCheck()}
          </ScrollView>
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
