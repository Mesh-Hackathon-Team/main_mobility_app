import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ContainerBoxed(props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
    },
});
