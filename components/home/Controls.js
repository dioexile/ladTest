import {View, StyleSheet,  TouchableOpacity } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const Controls = ({navigation, item, handleLike}) => {
  
  return (
    <View style = {styles.controls}>
      <View style = {styles.controlsItem}>
      {
      item.liked 
      ? 
      <TouchableOpacity>
        <AntDesign name="heart" size={25} color="white"/>
      </TouchableOpacity>
      :                  
      <TouchableOpacity onPress={()=>handleLike(item.id)} >
        <AntDesign name="hearto" size={25} color="white"/>
      </TouchableOpacity>
      }
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Comments', item)} style = {styles.controlsItem}>
        <AntDesign name="message1" size={25} color="white" />
      </TouchableOpacity>
      <View style = {styles.controlsItem}>
        <AntDesign name="sharealt" size={25} color="white" />
      </View>
    </View>
  )
}

export default Controls

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  controlsItem:{
    alignItems: 'center',
    marginHorizontal: 10
  },
})