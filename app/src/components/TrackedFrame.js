import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, General } from '../styles';

export default function TrackedFrame() {
    return (
        <View style={styles.container}>
            <View style={styles.space}/>
            
            <Text style={styles.trackedText}>
                {"Fahrt wird getracked"}
            </Text>
            
            <View style={styles.space}/>
            
            <Text>
                {"Einfach einsteigen und los fahren.\n"}
                {"Wir erledigen den Rest für Dich."}
            </Text>

            <View style={styles.space}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: "visible",
        backgroundColor: Colors.WHITE,
        borderRadius: 30,
        justifyContent:'center',
        alignItems: 'center',
        borderColor: Colors.BORDER,
        borderWidth: 2,
    },

    trackedText:{
        overflow: "hidden",
        color: Colors.FONT,
        fontStyle: "normal",
        fontSize: 22,
    },

    space:{
        height: 5,
    },
   
});
