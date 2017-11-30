import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const MsgSendButton = ({ onPress, iconName, style }) => {
  const { buttonStyle, iconStyle, textStyle } = styles;

  return (
      <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
        <Ionicons size={40} name={iconName} color="gray" style={iconStyle} />
        <View style={{ flexDirection: 'column', paddingTop: 35 }}>
          <Text style={textStyle}>
            이웃에게
          </Text>
          <Text style={textStyle}>
            쪽지 쓰기
          </Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '600',

    marginLeft: 0,
    marginRight: 3,
    marginTop: 0,
    marginBottom: 0,

    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 5,

    alignSelf: 'flex-end',
    
  },

  iconStyle: {

    marginLeft: 3,
    marginRight: 0,
    marginTop: 3,
    marginBottom: 0,

    paddingLeft: 5,

    alignSelf: 'flex-start',

  },

  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 7,

    flexDirection: 'row',

    marginLeft: 2,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,

    width: 110,
    height: 85,

  },

};

export default MsgSendButton;
