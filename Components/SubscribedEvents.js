import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

const SubscribedEventsScreen = () => (
    <View style={styles.innerContainer}>
        <Text style={styles.heading}>Subscribed Events</Text>
        <View style={styles.cardContainer}>
            <Card style={styles.card}>
                <CardItem style={styles.cardHeader} header button>
                    <Text style={styles.cardText}>Diwali</Text>
                    <Text style={styles.cardText}>30-09-2020</Text>
                </CardItem>
                <CardItem button >
                    <Body>
                        <Text style={styles.bodyText}>Description : 25 Events</Text>
                        <Text style={styles.bodyText}>Status : True</Text>
                    </Body>
                </CardItem>
            </Card>
        </View>
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
    card: {
        marginTop: 15
    },
    cardHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 40,
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    bodyText: {
        fontSize: 16,
        fontWeight: '500',
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default SubscribedEventsScreen