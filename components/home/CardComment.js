import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardComment = ({item}) => {
  return (
    <View>
      {item.comments.map((comment)=>(
        <View style={styles.allComments} key={comment}>
          <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16}}>Adam: </Text>
          <Text style={{ color: '#fff', fontSize: 16}}>{comment}</Text>
        </View>
      ))}
    </View>
  )
}

export default CardComment

const styles = StyleSheet.create({
  allComments:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexWrap: 'wrap'
  }
})