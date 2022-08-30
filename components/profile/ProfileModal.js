import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const ProfileModal = ({visible, pic}) => {
  cosnt [showModal, setShowModal] = useState(visible)
  return (
    <View style={styles.modal}>
      <Image source={{uri: pic.src}}/>
    </View>
  )
}

export default ProfileModal

const styles = StyleSheet.create({
  modal:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center'
  }
})