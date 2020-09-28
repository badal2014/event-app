import React from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';
import { TextInput, Switch } from 'react-native-gesture-handler';
const isEnabled = true
const CreateEventScreen = () => (
    <View style={styles.innerContainer}>
        <Text style={styles.heading}>Create Event</Text>
        <TextInput style={{ marginTop: 15, height: 40, width: '100%', borderRadius: 10, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }} placeholder="Event Name" />
        <Picker selectedValue={"true"}>
            <Picker.Item label="Status" value="" />
            <Picker.Item label="True" value={true} />
            <Picker.Item label="False" value={false} />
        </Picker>
        <TextInput style={{ height: 40, width: '100%', borderRadius: 10, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }} placeholder="Description" multiline={true} numberOfLines={10} />
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            value={true}
        />
        <Button title="Create Event" />
    </View>
)
const styles = StyleSheet.create({
    innerContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
})

export default CreateEventScreen