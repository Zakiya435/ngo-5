import React, { Component,useState,useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import db from "../config.js";

export default class ClothesScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      allData:[]
    }
  }

  getInfo(){
    db.collection('clothes')
    .onSnapshot((snapshot)=>{
      var info = snapshot.docs.map((doc) => doc.data())
      this.setState({
        allData: info
      })
    })
  }
  componentDidMount(){
    this.getInfo()
  }

render(){
    return(
      <View style={{flex:1, backgroundColor:'#d35454'}}>   
      <FlatList
      data={this.state.allData}
      renderItem={({item})=>(
        <View style={{borderBottomWidth: 2}}>
          <Text>{"Name: "+item.name}</Text>
          <Text>{"Place: "+item.place}</Text>
          <Text>{"Contact: "+item.contact}</Text>
        </View>
      )}
      keyExtractor = {(item,index)=> index.toString()}
      />
        <View style={{paddingTop:30}}> 
      <TouchableOpacity
      style={{backgroundColor:'#14519b',width:100,height:50,borderColor:'black',borderWidth:4,borderRadius:10}}
      onPress={()=>{this.props.navigation.navigate('ListScreen')}}
      >
        <Text style={{fontSize:25,fontWeight:"bold",alignSelf:'center'}}>Back</Text>
      </TouchableOpacity>
    </View>
      </View>
    )
  }
}