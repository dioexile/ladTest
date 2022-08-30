import React from 'react'
import {View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const HomeComment = ({value, setValue, posts, setPosts, item}) => {
  const addComment=(id) => {
    setPosts([
      ...posts.map((post) =>
        (post.id === id) ? { ...post, comments: [...post.comments, value]} : { ...post } 
      )
    ])
    setValue('')
  }
  return (
    <View style={styles.comment}>
    <Image style={styles.commentImg} source={{uri: 'https://sun3-11.userapi.com/s/v1/ig2/8FiQUyu97pzvJdzxUezib3eGkEO85EFyJlTXkTNsv7-Np3UMhnckeKVVsGJ-yGF4hh8mOBbJUu9HG5mMIb0I_P6m.jpg?size=200x270&quality=95&crop=88,0,352,476&ava=1'}}/>
    <TextInput 
      placeholder='Add a comment' 
      style={styles.commentInput} 
      placeholderTextColor='#eaeaea'
      value={value}
      onChangeText={setValue}
    />
    <TouchableOpacity onPress={()=>addComment(item.id)}>
      <Entypo name="paper-plane" size={28} color="white" />
    </TouchableOpacity>
  </View>
  )
}

export default HomeComment

const styles = StyleSheet.create({
  comment:{
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius:20,
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems:'center'
  },
  commentImg:{
    width: 40,
    height: 40,
    borderRadius: 20
  },
  commentInput:{
    width: '80%',
    borderRadius: 20,
    paddingLeft: 10,
    color: '#fff'
  },
})