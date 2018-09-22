import React, { Component } from "react";
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => (
  <DefaultInput 
    placeholder="Place Name" 
    value={props.placeName} 
    onChangeText={props.onChangedText}>
  </DefaultInput>
)

export default placeInput;
