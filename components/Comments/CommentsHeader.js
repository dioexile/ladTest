import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const CommentsHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Comments</Text>
      </View>
  )
}

export default CommentsHeader

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  headerText:{
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    color: '#fff'
  }
})