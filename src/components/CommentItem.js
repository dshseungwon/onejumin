import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native';
import { CardSection } from './common';
import Ionicons from "react-native-vector-icons/Ionicons";

class CommentItem extends Component {

  render() {
    return (
      <View>
        <CardSection>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons
              size={30}
              name={"ios-contact-outline"}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginRight: 10 }}>
                  {this.props.comment.nickname}
                </Text>
                <Text>
                  {this.props.comment.time}
                </Text>
              </View>
              <Text>{this.props.comment.content}</Text>
            </View>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
};

export default CommentItem;
