import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.middleContainer}>
                    <Text>Login</Text>
                    <TextInput style={{ height: 40, width: '100%', borderRadius: 10, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }} placeholder="Enter Email" />
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%', borderRadius: 10, paddingLeft: 10, marginTop: 15 }} secureTextEntry={true} placeholder="Enter Password" />
                    <Text onPress={() => this.props.navigation.navigate('SignUp')}>Sign Up</Text>
                    <Button title="Login" style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Dashboard')} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    middleContainer: {
        position: 'absolute',
        top: 200,
        textAlign: 'center',
        alignItems: 'center',
    },
    loginBtn: {
        padding: 20
    }
})

