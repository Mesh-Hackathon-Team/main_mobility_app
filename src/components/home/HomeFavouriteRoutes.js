import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeFavouriteRoutes(props) {
    return (
        <View style={styles.container}>
            <Text>Gespeicherte Routen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
});
