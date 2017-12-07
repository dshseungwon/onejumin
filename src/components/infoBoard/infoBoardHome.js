import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Button, Card, CardSection } from '../common';
import PostList from '../PostList';

class infoBoardHome extends Component {

  onButtonPress() {
    Actions.notice_write({ category: 'infoBoard' });
  } 

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f9f8e9' }}>
        <View style={styles.infoStyle}>
          <Ionicons size={25} name={'ios-information-circle-outline'} color="gray" style={{ marginLeft: 5 }} />
          <Text style={{ marginLeft: 5, marginRight: 30, fontSize: 18, color: '#565552', fontWeight: '500' }}>
            같은 지역(동/구) 주민들과의 대화/정보공유 게시판입니다
          </Text>
        </View>
        <PostList category='infoBoard' />
        <Card>
          <CardSection>
            <Button onPress={this.onButtonPress}> 글쓰기 </Button>
          </CardSection>
        </Card>
      </View>
     );
    }


}

const styles = {
  infoStyle: {
    flexDirection: 'row',
    backgroundColor: '#fcf7ad',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 3,
    paddingBottom: 3
  }
};

export default infoBoardHome;
