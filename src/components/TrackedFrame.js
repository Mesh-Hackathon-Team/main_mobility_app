import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
        //backgroundColor: "#99eeff",
        backgroundColor: "#ffffff",
        borderRadius: 30,
        justifyContent:'center',
        alignItems: 'center',
        borderColor: "#c8c7c7",
        borderWidth: 2,
    },

    trackedText:{
        overflow: "hidden",
        color: "#000000",
        fontStyle: "normal",
        fontSize: 22,
    },

    space:{
        height: 5,
    },
   
});
