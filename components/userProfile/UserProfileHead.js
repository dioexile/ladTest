import React from 'react'
import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 



const UserProfileHead = ({navigation, user}) => {

  return (
    <View style={styles.profileHead}>
      <View style={styles.profileHeadInfo}>
        <View style = {styles.profileImage}>
          <Image style ={styles.profileImageImg} source={{uri: user.avatar}}/>
        </View>
        <View style ={styles.profileName}>
          <Text style ={styles.profileNameNick}>{user.username}</Text>
          <TouchableOpacity style={styles.follow}>
            <Text style={{color: '#fff', fontWeight: '600'}}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.add} onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={30} color="white" />        
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
    marginRight: 30
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
    marginLeft: 20
  },
  profileNameNick: {
    fontSize: 18,
    fontWeight: '600',
    color:'#fff'
  },
  profileNameReal: {
    color: 'gray'
  },
  follow:{
    backgroundColor: '#000',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10
  }
})
export default UserProfileHead