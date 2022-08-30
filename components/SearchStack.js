import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Search from '../screens/Search';
import UserProfile from '../screens/UserProfile';

const Stack = createStackNavigator();
const screenOptions= {
  headerShown: false
}
const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  )
}

export default SearchStack
