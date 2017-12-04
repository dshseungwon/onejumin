import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';


class ListItem extends Component {

  onRowPress() {
    Actions.contentView({ post: this.props.post, category: this.props.category });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>

        <View style={styles.cardStyle}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
              source={require('../images/googleFav.png')}
            />
            <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', backgroundColor: 'red' }} >
                <Text style={{ alignSelf: 'flex-start' }}>정수연</Text> 
                <View style={{ backgroundColor: 'blue', justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                  <Image
                    style={{ width: 10, height: 10 }}
                    source={require('../images/googleFav.png')}
                  />
                  <Text>9</Text>
                  <Image
                    style={{ width: 10, height: 10 }}
                    source={require('../images/googleFav.png')}
                  />
                  <Text>29</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'flex-start' }}>10/2 18:03</Text>
                <Text style={{ alignSelf: 'flex-end' }}>더보기</Text>
              </View>
            </View>
          </View>

          <View style={{ marginLeft: 10 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 15 }}> 101동 </Text>
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
