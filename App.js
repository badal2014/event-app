import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import LikesScreen from './Components/LikesScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProfileTabScreen from './Components/ProfileTabScreen';
import SearchTabScreen from './Components/SearchTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons, Entypo, AntDesign, Feather } from '@expo/vector-icons';
import AddMediaScreen from './Components/AddMediaScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen name="Home" component={HomeScreen} showLabel={false} options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Search" component={SearchTabScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          )
        }}
        />
        <Tab.Screen name="AddMedia" component={AddMediaScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus-square" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Likes" component={LikesScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfileTabScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
