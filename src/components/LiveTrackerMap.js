import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function LiveTrackerMap(props) {


    // Get location and send with props 

    var markers = [
        {
            latitude: 53.5505123,
            longitude: 9.9925973,
            title: 'Foo Place',
            subtitle: '1234 Foo Drive'
        }
    ];
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 53.5505123,
                    longitude: 9.9925973,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                followsUserLocation={true}
            >
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    map: {
        height: 300,
    },
});