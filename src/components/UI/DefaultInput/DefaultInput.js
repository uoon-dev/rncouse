import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

const defaultInput = props => (
  <TextInput 
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style]} 
    // placeholder={props.placeholder}
    >
  </TextInput>
);

const styles = StyleSheet.create({
  input: {
    width: "100%", 
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8
  }
})

export default defaultInput;