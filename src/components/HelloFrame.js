import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HelloFrame() {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.gutenMorgenText}>
                    {timeExpression()}
                    {" Julian" + ","}
                </Text>
                <Text style={styles.freieFahrtText}>
                    {"Freie Fahrt"}
                </Text>
                <Text style={styles.ankuftszeitText}>
                    {"Deine geschätzte Ankunftszeit ist\n"}
                    {"Heute um 12:24"}
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonRouteAnzeigen}>
                <Text>
                    {"Route Anzeigen"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        overflow: "visible",
        backgroundColor: "#a8dbff",
        borderRadius: 30,
        justifyContent:'center',
        alignItems: 'center',
    },

    textView: {
        position: 'absolute',
        bottom: 60,
    },

    gutenMorgenText:{
        overflow: "hidden",
        color: "#000000",
        fontStyle: "normal",
        fontSize: 20,
    },

    freieFahrtText:{
        overflow: "hidden",
        color: "#000000",
        fontSize: 37,
        fontStyle: "normal",
    },

    ankuftszeitText:{
        overflow: "hidden",
        color: "#000000",
        fontStyle: "normal",
    },

    buttonRouteAnzeigen:{
        height: 10,
        backgroundColor: "#4fcfe8",
        padding: 20,
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },

    viewSpace:{
        height: 20,
    }
});

const timeExpression = () => {
    let time = new Date().getHours;
    if(time < 12){
        return "Guten Morgen";
    }else if(time<18){
        return "Guten Tag";
    }else{
        return "Guten Abend";
    }
}
