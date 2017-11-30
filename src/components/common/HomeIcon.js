import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeIcon = ({ onPress, iconName, children, style }) => {
  const { buttonStyle, iconStyle, textStyle } = styles;

  return (
      <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
        <Ionicons size={65} name={iconName} color="white" style={iconStyle} />
        <Text style={textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',

    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,

    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5,
  },

  iconStyle: {

    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,

    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,

  },

  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 7,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,

    width: 101,
    height: 101,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },

};

export { HomeIcon };
