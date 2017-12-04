import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button } from '../../common';
import MsgList from './MsgList';

class MsgHome extends Component {

  state = { isRecv: true };

  render() {
    const { isRecv } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button onPress={() => this.setState({ isRecv: true })}>수신</Button>
          <Button onPress={() => this.setState({ isRecv: false })}>발신</Button>
          <Button onPress={Actions.msgSend}>작성</Button>
        </View>

        <MsgList type={isRecv} />
      </View>
    );
  }

}

export default MsgHome;
