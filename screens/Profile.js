import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ProfileHead from '../components/profile/ProfileHead';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileMain from '../components/profile/ProfileMain';

const me = {username: 'Adam', avatar:'https://sun3-11.userapi.com/s/v1/ig2/8FiQUyu97pzvJdzxUezib3eGkEO85EFyJlTXkTNsv7-Np3UMhnckeKVVsGJ-yGF4hh8mOBbJUu9HG5mMIb0I_P6m.jpg?size=200x270&quality=95&crop=88,0,352,476&ava=1',followers:10, subscriptions: 0}

const Profile = ({route}) => {
  const [img, setImg] = useState(null)
  const [user, setUser] = useState(null)
  const [pics, setPics] = useState([])


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor: '#000'}}>
        <ProfileHead pics={pics} setPics={setPics} user={me}/>
        <ProfileInfo pics={pics} user={me}/> 
        <ProfileMain img={img} pics={pics}/>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    // paddingTop: 40,

    height: '100%'
  }
})
export default Profile