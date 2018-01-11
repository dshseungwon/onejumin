import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button } from '../../common';
import MsgList from './MsgList';

class MsgHome extends Component {

  state = { isRecv: true };

  render() {
    const { isRecv } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#f9f8e9' }}>
        <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableWithoutFeedback onPress={() => this.setState({ isRecv: true })}>
            <View style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>수신함</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.setState({ isRecv: false })}>
            <View style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>발신함</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <MsgList type={isRecv} />
      </View>
    );
  }

}

const styles = {
  buttonStyle: {
    backgroundColor: '#f9f2d0',
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonTextStyle: {
    color: '#a49c9c',
    fontSize: 25,
    fontWeight: '600'
  }
};

export default MsgHome;
