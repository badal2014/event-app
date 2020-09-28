import React, { Component } from 'react'
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import ProfileTabScreen from './Components/ProfileTabScreen';
import { Ionicons, Entypo, AntDesign, Feather } from '@expo/vector-icons';
import AddMediaScreen from './Components/CreateEvent';
import Welcome from './Components/Screens/Welcome';
import { SafeAreaView } from 'react-navigation';
import AllEventsScreen from './Components/AllEvents';
import SubscribedEventsScreen from './Components/SubscribedEvents';
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <NavigationContainer> */}
            <Tab.Navigator tabBarOptions={{ showLabel: false }}>
                <Tab.Screen name="Home" component={HomeScreen} showLabel={false} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="AllEvents" component={AllEventsScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="search1" color={color} size={size} />
                    )
                }}
                />
                <Tab.Screen name="AddEvent" component={AddMediaScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="plus-square" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="SubscribedEvents" component={SubscribedEventsScreen} options={{
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
            {/* </NavigationContainer> */}
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
})
