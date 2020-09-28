import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
const HomeScreen = () => (
    <ScrollView style={styles.innerContainer}>
        <Text style={styles.heading}>Home Screen </Text>
        <View style={styles.topContainer}>
            <Text style={styles.topText}>20 deg</Text>
            <Text style={styles.topText}>28 Sept 2020</Text>
        </View>
        <View style={styles.graph}></View>
        <View style={styles.cardContainer}>
            <Card style={styles.card}>
                <CardItem style={styles.cardHeader} header button>
                    <Text>All Events</Text>
                </CardItem>
                <CardItem button >
                    <Body><Text>25 Events</Text></Body>
                </CardItem>
            </Card>
            <Card style={styles.card}>
                <CardItem header button style={styles.cardHeader}>
                    <Text>Subscribed Events</Text>
                </CardItem>
                <CardItem button >
                    <Body><Text>25 Events</Text></Body>
                </CardItem>
            </Card>
            <Card style={styles.card}>
                <CardItem header button style={styles.cardHeader}>
                    <Text>Today Events</Text>
                </CardItem>
                <CardItem button >
                    <Body><Text>25 Events</Text></Body>
                </CardItem>
            </Card>
            <Card style={styles.card}>
                <CardItem header button style={styles.cardHeader}>
                    <Text>All Events</Text>
                </CardItem>
                <CardItem button >
                    <Body><Text>25 Events</Text></Body>
                </CardItem>
            </Card>
        </View>
    </ScrollView>
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
    topContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-around',
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15
    },
    graph: {
        height: 150,
        marginTop: 30,
        justifyContent: 'space-around',
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15
    },
    topText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    card: {
        // width: '45%',
        // marginRight: 15,
        marginTop: 15,
        backgroundColor: '#41bfcb'
    },
    cardHeader: {
        backgroundColor: '#41bfcb'
    },
    // cardContainer: {
    //     flexDirection: 'row',
    //     flexWrap: 'wrap'
    // }
})

export default HomeScreen