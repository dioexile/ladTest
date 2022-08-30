import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile'
import SearchStack from './components/SearchStack';
import HomeStack from './components/HomeStack';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();


export default function App() {
   
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = 'home'
            } else if (route.name === 'SearchStack') {
              iconName = 'search1';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }

            return <AntDesign name={iconName} size={30} color={color} />;
          },
          tabBarAllowFontScaling: true,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#a9a9a9',
          headerShown: false,
          tabBarStyle:{
            backgroundColor: '#000',
            paddingVertical: 5
          },
          tabBarLabelStyle:{
            color: '#000',
            fontSize:1
          }
        })}
        initialRouteName='Home'>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="SearchStack" component={SearchStack} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}