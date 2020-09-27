import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import DatePicker from 'react-native-datepicker';


export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.middleContainer}>
                    <Text> Sign Up </Text>
                    <TextInput style={{ height: 40, width: '100%', borderRadius: 10, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }} placeholder="Enter Name" />
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%', borderRadius: 10, paddingLeft: 10, marginTop: 15 }} placeholder="Enter Email" />
                    <Button title="Login" onPress={() => this.props.navigation.goBack(null)} />
                    <Button title="Sign Up" />
                    {/* <DatePicker title="Select Date" mode="date" style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%', borderRadius: 10, paddingLeft: 10, marginTop: 15 }} placeholder="Enter Email" /> */}
                    {/* <DatePicker
                        style={{ width: 200 }}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                    /> */}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    middleContainer: {
        position: 'absolute',
        top: 200
    }
})
