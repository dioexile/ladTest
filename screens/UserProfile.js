import React from 'react'
import {StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import UserProfileHead from '../components/userProfile/UserProfileHead';
import UserProfileInfo from '../components/userProfile/UserProfileInfo';


const UserProfile = ({route, navigation}) => {


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor: '#000'}}>
        <UserProfileHead user={route.params} navigation={navigation}/>
        <UserProfileInfo user={route.params}/>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})
export default UserProfile