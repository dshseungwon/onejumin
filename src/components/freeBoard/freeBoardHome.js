import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Button, Card, CardSection } from '../common';
import PostList from '../PostList';

class freeBoardHome extends Component {

  onButtonPress() {
    Actions.notice_write({ category: 'freeBoard' });
  } 

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f9f8e9' }}>
        <View style={styles.infoStyle}>
          <Ionicons size={25} name={'ios-information-circle-outline'} color="gray" style={{ marginLeft: 5 }} />
          <Text style={{ marginLeft: 5, marginRight: 30, fontSize: 18, color: '#565552', fontWeight: '500' }}>
            아파트 주민들과 함께 자유롭게 대화를 나누는 게시판입니다.
          </Text>
        </View>
        <PostList category='freeBoard' />
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

export default freeBoardHome;
