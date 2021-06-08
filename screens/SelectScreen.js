import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Picker
} from 'react-native';


export default class SelectScreen extends Component{
  render(){
  return (
    <View style={{flex:1}}>
      <Picker
        style={{ height: 50, width: 150 }}
      >
        <Picker.Item label="DEF" value="java" />
        <Picker.Item label="ABC" value="js" />
      </Picker>
    </View>
  );
}
}