import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableHighlight, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default function Welcome({ navigation }) {
    return (
        <SafeAreaView style={styles.AndroidSafeArea} >
            {console.log(Platform.OS, StatusBar.currentHeight, Platform.OS === "android" ? StatusBar.currentHeight : 0)}
            <View style={styles.container} >
                <Text style={styles.dahboardText}>Dashboard</Text>
                <View style={styles.logoContainer}>
                    <AntDesign size={70} name="checkcircleo" color="#fff" />
                    <Text style={styles.welcome}>Welcome</Text>
                    <Text style={styles.description} numberOfLines={2}>Lorem Ipsum dolor sit amet,{`\n`} constetupter adipisicing eiit</Text>
                </View>
                <TouchableHighlight onPress={() => navigation.navigate('Login')} style={styles.buttonContainer}>
                    <Text title="Get Started" style={styles.button} >Get Started</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#41bfcb',
        paddingTop: 40
    },
    logoContainer: {
        position: 'absolute',
        top: 200,
        alignItems: 'center',
        textAlign: 'center',
    },
    welcome: {
        fontSize: 30,
        fontWeight: '100',
        marginTop: 20,
        color: '#fff'
    },
    description: {
        color: '#fff',
        textAlign: 'justify',
        marginTop: 20,
        fontFamily: 'sans-serif'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
    },
    button: {
        color: '#41bfcb',
        padding: 10,
        backgroundColor: '#fff',
        textAlign: "center",
        fontSize: 20,
        borderRadius: 50,
        width: 200,
        alignItems: 'center'
    },
    dahboardText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff'
    },
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})
