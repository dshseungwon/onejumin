import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button, Card, CardSection } from '../common';
import PostList from '../PostList';
import NoticeWrite from './NoticeWrite';

class NoticeHome extends Component {

  render() {
    return (
      <View>
        <PostList category='notice' />
        <NoticeWrite category='notice' />
      </View>
     );
    }


}

export default NoticeHome;
