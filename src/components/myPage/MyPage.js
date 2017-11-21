import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Card, CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class MyPage extends Component {
  render() {
    return (
      <Card>

        <CardSection style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 50, height: 50, marginRight: 20 }}
            source={require('../../images/googleFav.png')}
          />
          <View style={{ flexDirection: 'column', justifyContent: 'space-around' }} >
            <Text>닉네임</Text>
            <Text>$아파트이름 $동 $호수</Text>
          </View>
        </CardSection>

        <CardSection>
          <Button onPress={Actions.MyPage}>
            마이페이지로 돌아가기
          </Button>
        </CardSection>

      </Card>
      );
    }


}

export default MyPage;
