import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Colors, General } from '../styles';

export default function FreieFahrtFrame() {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.freieFahrtText}>
                    {"Freie Fahrt"}
                </Text>
                <View style={styles.lineBreaker}>
                    <Text style={styles.ankuftszeitText}>
                        {"Deine geschätzte Ankunftszeit ist Heute um 12:24"}
                    </Text>
                </View>
            </View>
            
            <Image style={styles.image} source={require('../assets/welcomeIcons/train.png')} />
            
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
        height: 160,
        overflow: "visible",
        backgroundColor: Colors.WHITE,
        borderRadius: 30,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 20,
        borderColor: Colors.BORDER,
        borderWidth: 2,
    },

    textView: {
        position: 'absolute',
        bottom: 60,
    },

    freieFahrtText:{
        color: Colors.FONT_HEADER,
        fontSize: 37,
    },

    ankuftszeitText:{
        overflow: "hidden",
        color: Colors.FONT,
        fontStyle: "normal",
    },

    buttonRouteAnzeigen:{
        height: 10,
        backgroundColor: Colors.LIME,
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
    },

    image:{
        position:'absolute',
        height: 65,
        width: 65,
        right: 20,
        top: 0,
    },

    lineBreaker:{
        width: 250,
    },

});
