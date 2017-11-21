import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';


class ListItem extends Component {

  onRowPress() {
    Actions.contentView({ post: this.props.post });
  }

  render() {
    let title = '';
    if (this.props.isMsg === true) {
      title = this.props.post.msg;
    } else {
      title = this.props.post.title;
    }

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
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
}

export default ListItem;
