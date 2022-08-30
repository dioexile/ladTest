import React, { useState } from 'react'
import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';



const ProfileHead = ({pics, setPics, user}) => {
  const [avatar, setAvatar] = useState('')
  const pickImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
      videoQuality: 1
    })
    if(!res.cancelled){
      setPics([{src: res.uri, id: uuid.v4()}, ...pics])
    }
  }
  const uploadAvatar = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
      videoQuality: 1
    })
    if(!res.cancelled){
      setAvatar(res.uri)
    }
  }

  return (
    <View style={styles.profileHead}>
      <View style={styles.profileHeadInfo}>
        <View style = {styles.profileImage}>
          {avatar ? <Image style ={styles.profileImageImg} source={{uri: avatar}}/> : <Image style ={styles.profileImageImg} source={{uri: user.avatar}}/>}
        </View>
        <View style ={styles.profileName}>
          <Text style ={styles.profileNameNick}>{user.username}</Text>
        </View>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.add} onPress={uploadAvatar}>
          <AntDesign name="edit" size={36} color="white" />      
        </TouchableOpacity>
        <TouchableOpacity style={styles.add} onPress={pickImage}>
          <AntDesign name="pluscircle" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  controls:{
    flexDirection: 'row'
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHead:{
    backgroundColor: '#000',
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  add: {
    marginRight: 10
  },
  profileHeadInfo:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImageImg: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  profileName:{
    marginLeft: 20,
  },
  profileNameNick: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'
  },


})
export default ProfileHead