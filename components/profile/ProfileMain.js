import React from 'react'
import { Image, StyleSheet, Dimensions, TouchableOpacity, View} from "react-native";
const {width} = Dimensions.get('window')


const ProfileMain = ({pics}) => {

  return (
    <View style={styles.cont}>
      {pics.map(pic=>(
        <TouchableOpacity key={pic.id} onPress={()=>setModalVisible(true)}>
          <Image style={styles.mainImage} source={{uri: pic.src}}/>
        </TouchableOpacity>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  mainImage: {
    width: width / 3,
    height: width / 3,
  },
  cont: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
export default ProfileMain