import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';


class CommentItem extends Component {

  render() {
    return (
      <TouchableWithoutFeedback>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.comment.content}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
