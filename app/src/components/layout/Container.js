import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Container(props) {
    return (
        <View style={styles.container}>
            {props.children}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});
