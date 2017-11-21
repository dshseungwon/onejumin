import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ContentView extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.post.title}</Text>
        <Text>{this.props.post.content}</Text>
      </View>
    );
  }
}

export default ContentView;