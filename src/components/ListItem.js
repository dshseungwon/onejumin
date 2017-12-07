import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CardSection } from './common';


class ListItem extends Component {

  onRowPress() {
    Actions.contentView({ post: this.props.post, category: this.props.category });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>

        <View style={styles.cardStyle}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Ionicons size={50} name={'ios-contact-outline'} style={{ marginLeft: 10, marginRight: 10 }} />
            <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row' }} >
                <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold' }}>
                  {this.props.post.nickname}
                </Text> 
                <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                  <Ionicons size={20} name={'ios-chatbubbles-outline'} style={{ paddingRight: 10 }} />
                  <Text style={{ paddingRight: 13, color: '#a3a3a2', fontSize: 19, fontWeight: '500' }}>{this.props.post.numComments}</Text>
                  <Ionicons size={20} name={'ios-thumbs-up-outline'} style={{ paddingRight: 10 }} />
                  <Text style={{ paddingRight: 10, color: '#a3a3a2', fontSize: 19, fontWeight: '500' }}>{this.props.post.like}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'flex-start' }}>{
                  this.props.post.time}
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginLeft: 10 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 15 }}>
                {this.props.post.dong}동
              </Text>
              <Text style={styles.titleStyle}>
                {this.props.post.title}
              </Text>
            </View>

            <Text>
              {this.props.post.content}
            </Text>

          </View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
  },
  cardStyle: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff100',
    backgroundColor: '#ffffff',

    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 3,

    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  }
};

export default ListItem;
