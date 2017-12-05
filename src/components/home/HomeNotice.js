import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeNotice = ({ iconName, style }) => {
  const { buttonStyle, iconStyle, titleTextStyle, innerBoxStyle } = styles;

  return (
      <View style={[buttonStyle, style]}>
       <View style={{ justifyContent: 'space-around', flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginTop: 2, marginBottom: 2 }}>
            <Ionicons size={35} name={iconName} color="gray" style={iconStyle} />
            <Text style={titleTextStyle}>알림</Text>
          </View>

          <View style={innerBoxStyle}>
            <Text style={{ marginTop: 3 }}> Something </Text>
          </View>
        </View>
      </View>
  );
};

const styles = {

  iconStyle: { 
  },

  titleTextStyle: {
    color: 'gray',
    fontSize: 25,
    fontWeight: '500',

    marginLeft: 5,

  },

  innerBoxStyle: {

    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'column',

    paddingTop: 3,

    backgroundColor: 'white',

    width: 200,
    height: 125,

  },

  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 10,

    flexDirection: 'column',

    marginLeft: 2,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,

    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 0,

    width: 220,
    height: 180,

  },

};

export default HomeNotice;
