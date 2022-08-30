import { Text, View, StyleSheet, TouchableOpacity, TextInput, Dimensions, Button, SafeAreaView} from 'react-native';
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width} = Dimensions.get('window')


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const sigin = async () => {
   const token = await AsyncStorage.getItem('userToken')
   console.log(`ur token is ${token}`)
   setUsername('')
   setPassword('')
  }

  const register = async () => {
    try {
      await AsyncStorage.setItem('userToken', data)
      setUsername('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
    await AsyncStorage.removeItem('token')
  }


  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.loginInput}
          placeholder='Username'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.loginInput}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.formBtns}>
          <TouchableOpacity style={styles.button} onPress={sigin}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={register}>
            <Text style={styles.btnText}>No account? Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    marginTop: 40,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
  },

  loginInput:{
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: width - 100,
    borderColor: '#ae22e0',
    borderWidth: 2,
    borderRadius: 13
  },
  formBtns:{
    marginTop: 10
  },
  button:{
    padding: 10,
    borderRadius: 13,
    backgroundColor: '#000',
    alignItems: "center",
    marginTop: 10
  },
  btnText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
})