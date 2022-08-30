import { StyleSheet, Image, Text, View,Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import CommentsHeader from '../components/Comments/CommentsHeader';
const {width} = Dimensions.get('window')

const Comments = ({route, navigation}) => {
  const info = route.params
  return (
    <SafeAreaView style={styles.container}>
      <CommentsHeader navigation={navigation}/>
      <View style={styles.commentsMain}>
        <View style={styles.desc}>
          <Image source={{uri: info.avatar}} style={styles.image}/>
          <Text style={styles.descUser}>{info.username} </Text>
          <Text style={styles.descText}>{info.description}</Text>
        </View>
        {info.comments.map((comment)=>(
          <View key={comment} style={styles.comment}>
            <Image style={{width: 50, height: 50, borderRadius: 25}} source={{uri: 'https://sun3-11.userapi.com/s/v1/ig2/8FiQUyu97pzvJdzxUezib3eGkEO85EFyJlTXkTNsv7-Np3UMhnckeKVVsGJ-yGF4hh8mOBbJUu9HG5mMIb0I_P6m.jpg?size=200x270&quality=95&crop=88,0,352,476&ava=1'}}/>
            <Text style={{ color: '#fff', fontWeight: '700',  marginLeft: 10}}>Adam </Text>
            <Text style={{ color: '#fff',  maxWidth: width - 120}}>{comment}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Comments

const styles = StyleSheet.create({
  container:{
    height:'100%',
    backgroundColor: '#000',
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  desc:{
    flexDirection: 'row',
    borderBottomColor: '#404040',
    borderBottomWidth: 1,
    paddingVertical: 5
  },
  descUser:{
    color: '#fff',
    fontWeight:'700',
    marginLeft: 5
  },
  descText:{
    color: '#fff',
    maxWidth: width - 120,
  },
  comment:{
    flexDirection: 'row',
    paddingVertical: 10,
  },
  commentsMain:{
    paddingHorizontal: 20
  }
})