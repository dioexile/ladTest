import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import Comments from '../screens/Comments';
const Stack = createStackNavigator();
const screenOptions= {
  headerShown: false
}

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  )
}

export default SearchStack
