import React, {useRef, useState } from 'react'
import { View, StyleSheet, SafeAreaView, TouchableWithoutFeedback ,Image, Dimensions, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
const {width} = Dimensions.get('window')
import Stories from '../components/Stories';
import { mock } from '../mock';
import Controls from '../components/home/Controls';
import HomeComment from '../components/home/HomeComment';
import CardComment from '../components/home/CardComment';
import HomeModal from '../components/HomeModal';


const Home = ({navigation}) => {
  const [posts, setPosts] = useState(mock)
  const [value, setValue] = useState('')
  const [modalVisible, setModalVisible] = useState(false);

  const handleLike=(id) => {
    setPosts([
      ...posts.map((post) =>
        (post.id === id && post.liked != true) ? { ...post, liked: !post.liked, likes: post.likes + 1} : { ...post }
      )
    ])
  }
  
  const lastTap = useRef(0)

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <FlatList data={posts}
            ListHeaderComponent={Stories}
            renderItem={({item}) =>(
            <View style = {styles.card}>
              <View style = {styles.cardContent}>
                <View style = {styles.cardHead}>
                  <View style = {styles.cardInfo}>
                    <Image style ={styles.cardImage} source={{uri: item.avatar}}/>        
                    <View style ={styles.cardUser}>
                      <Text style ={styles.cardName}>{item.username}</Text>
                      <Text style ={styles.cardLocation}>{item.location}</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Ionicons name="ellipsis-vertical" size={22} color="white" />
                  </TouchableOpacity>
                </View>
                <TouchableWithoutFeedback onPress={()=>{
                  const now = Date.now()
                  const delay = 250
                  if(lastTap.current && now - lastTap.current < delay){
                    handleLike(item.id)
                  } else {
                    lastTap.current = now
                  }
                }}>
                  <Image style ={styles.content} source={{uri: item.src}}/>
                </TouchableWithoutFeedback>
                <Controls navigation={navigation} item={item} posts={posts} setPosts={setPosts} handleLike={handleLike}/>
                <View style={styles.cardDesc}>
                  <Text style = {styles.likes}>Liked by {item.likes} others</Text>
                  <Text style={{fontWeight: '600', fontSize: 16, marginTop: 10, color: '#fff'}}>{item.description} </Text>
                </View>
                <CardComment item={item}/>
                <TouchableOpacity onPress={()=>navigation.navigate('Comments', item)}>
                  <Text style={styles.viewAll}>View all comments({item.comments.length})</Text>
                </TouchableOpacity>
                <HomeComment value={value} setValue={setValue} posts={posts} setPosts={setPosts} item={item}/>
              </View>
            </View>
            )}
          />
        </View>
        <HomeModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },

  body: {
    borderColor: '#000',
    backgroundColor: '#000'
  },
  card: {
    width: '100%',
    maxWidth: width,
    // maxHeight: 650,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#404040'
  },
  cardContent: {
    padding:10
  },
  cardHead: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
  },
  cardUser: {
    marginLeft: 10
  },
  cardName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff'
  },
  cardLocation: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ccc'
  },
  content: {
    width: width - 25,
    height: width - 103
  },
  cardDesc:{
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  likes:{
    fontSize: 17,
    color:'#fff'
  },
  viewAll:{
    paddingHorizontal: 10,
    color: '#D1D1D1',
    fontSize:16,
    fontWeight: '500'
  },

})
export default Home