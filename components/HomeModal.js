import { StyleSheet, Text, TouchableOpacity, View, Modal,Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
const {width} = Dimensions.get('window')

const HomeModal = ({modalVisible, setModalVisible}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='none'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.close}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign name="closecircleo" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Text style={styles.modalText}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Text style={styles.modalText}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Text style={styles.modalText}>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Text style={styles.modalText}>Option 4</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default HomeModal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowRadius: 4,
    paddingVertical: 25,
    width: width/1.5
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center",
    color: '#fff',
    fontSize: 16
  },
  close:{
    position:'absolute',
    right: 10,
    top:10
  },
  modalOption:{
    paddingVertical: 10,
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
})