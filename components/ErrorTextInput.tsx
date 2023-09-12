import React from 'react';
import {Text} from 'react-native';

const ErrorTextInput = ({msg}: {msg: string}) => {
  return <Text style={{color: 'red'}}>{msg}</Text>;
};

export default ErrorTextInput;
