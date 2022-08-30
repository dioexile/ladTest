import React, { useState } from 'react'
import {View, StyleSheet, ScrollView,Text, Image, Dimensions, TouchableOpacity, SafeAreaView} from 'react-native';
import SearchHead from '../components/search/SearchHead';
import users from '../mock'
const {width} = Dimensions.get('window')





const Search = ({navigation}) => {
  const [value, setValue] = useState('')
  const filtred = users.filter(user => {
    return user.username.toLowerCase().includes(value.toLowerCase())
  })

  return (

      <SafeAreaView style={styles.cont}>
        <SearchHead value={value} setValue={setValue}/>
          <View style={styles.searchMain}>
            {filtred.map(user => (
              <TouchableOpacity key={user.username} style={styles.searchItem} onPress={() => navigation.navigate('UserProfile', user)}>
                <Image style={styles.searchImage} source={{uri: user.avatar}}/>
                <Text style={{fontSize: 18, fontWeight: '600', marginLeft: 10, color: '#fff'}}>{user.username}</Text>
              </TouchableOpacity>
            ))}
          </View>
      </SafeAreaView>
      
  )
}
const styles = StyleSheet.create({
  cont:{
    // paddingTop: 40,
    backgroundColor: '#000',
    height: '100%'
  },
  searchImage:{
    minWidth: 60,
    minHeight: 60
  },
  searchItem:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#404040'
  },
  searchMain:{
    marginTop: 20,
    flexDirection: 'column',
    paddingHorizontal: 15
  },

  mainImage: {
    width: width / 3,
    height: width / 3,
  },
})
export default Search