import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeNearbyList(props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.contentHeaderTopTitle}>ENTDECKE NEUES:</Text>
                <Text style={styles.contentHeaderTitle}>Rides by Ryde:</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F5F7'
    },
    content: {
        backgroundColor: '#ffffff',
        paddingVertical: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 3.84,
        elevation: 5,
    },

    contentHeaderTopTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 25,
    },

    contentHeaderTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 25,
    }
});
