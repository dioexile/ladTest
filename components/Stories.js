import {View, StyleSheet} from 'react-native';
import React from 'react'
import InstaStory from 'react-native-insta-story';
const data = [
  {
      user_id: 1,
      user_image: 'https://www.akbope.kz/images/teachers/19335047335ca475ee4c0e6.png',
      user_name: "Lex",
      stories: [
          {
              story_id: 1,
              story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
          },
          {
              story_id: 2,
              story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
          }]
  },
  {
      user_id: 2,
      user_image: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      user_name: "Max",
      stories: [
          {
              story_id: 1,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
          },
          {
              story_id: 2,
              story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
          }]
  },
  {
    user_id: 3,
    user_image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
    user_name: "Rave",
    stories: [
        {
            story_id: 1,
            story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        },
        {
            story_id: 2,
            story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        }]
  },
  {
    user_id: 4,
    user_image: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
    user_name: "Alisa",
    stories: [
        {
            story_id: 1,
            story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        },
        {
            story_id: 2,
            story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        }]
  },
];
const Stories = () => {
  return (
    <View style={styles.stories}>
      <InstaStory 
        data={data}
        duration={10}
        showAvatarText={false}
      />
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
  stories:{
    borderBottomColor: '#404040',
    borderBottomWidth: 1,
    backgroundColor: '#000'
  },
})