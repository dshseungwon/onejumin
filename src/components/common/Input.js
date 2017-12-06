import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  const label = props.label;
  const {placeholder} = props;
  const {value, onChangeText, secureTextEntry} = props;

  return (
    <View style={[containerStyle, props.containerStyle]}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize='none'
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={[inputStyle, props.inputStyle]}
        value={value}
        onChangeText={onChangeText}
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

export { Input };
