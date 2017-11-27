import React from 'react';
import { TextInput, View, Text } from 'react-native';

const DoubleInput = (props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  const label1 = props.label1;
  const label2 = props.label2;
  const { placeholder1 } = props;
  const { placeholder2 } = props;
  const { value1, value2, onChangeText1, onChangeText2, secureTextEntry1, secureTextEntry2 } = props;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label1}</Text>
      <TextInput
        secureTextEntry={secureTextEntry1}
        placeholder={placeholder1}
        autoCorrect={false}
        style={inputStyle}
        value={value1}
        onChangeText={onChangeText1}
      />
      <Text style={labelStyle}>{label2}</Text>
      <TextInput
        secureTextEntry={secureTextEntry2}
        placeholder={placeholder2}
        autoCorrect={false}
        style={inputStyle}
        value={value2}
        onChangeText={onChangeText2}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,

    borderRadius: 3,
    borderWidth: 1,
    marginRight: 9,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,

  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { DoubleInput };
