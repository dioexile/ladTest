import { Text, View, StyleSheet,  TextInput, Dimensions} from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const {width} = Dimensions.get('window')

const SearchHead = ({value, setValue}) => {
  return (
    <View style={styles.searchHeader}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder='Search'
          value={value}
          onChangeText={setValue}
          placeholderTextColor='#ccc'
        />
        <AntDesign name='search1' size={24} color='#fff' style={{marginRight: 10}}/>
      </View>
    </View>
  )
}

export default SearchHead

const styles = StyleSheet.create({
  searchHeader:{
    marginTop:20,
    alignItems: 'center',
  },
  inputArea:{
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor:'#404040',
    borderRadius: 20,
    width: width - 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    height: 40,
    width: width - 65,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 1.2,
    color:'#fff'
  },
})