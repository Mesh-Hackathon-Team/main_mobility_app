import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, Image, Button, Dimensions, TouchableOpacity, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

export default BottomLiveTracker = (props) => {

    return (
        <View>
            <TouchableOpacity><View style={styles.trackerContainer}>
                <Feather name="radio" color="#00FFB0" size={35} />
                <View style={styles.textContainer}>
                    <Text style={styles.trackerTitle}>Tracking aktiv</Text>
                    <Text style={styles.trackerSubTitle}>Du bist derzeit auf der Linie U4 unterwegs</Text>

                </View>
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    trackerContainer: {
        height: 70,
        width: width,
        backgroundColor: "#000752",
        position: 'absolute',
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        elevation: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#00FFB0',
        flexDirection: 'row',
        paddingHorizontal: 25,
        alignItems: 'center'

    },

    trackerTitle: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold'
    },

    textContainer: {
        marginLeft: 20,
    },

    trackerSubTitle: {
        color: '#DBE0E6',
    }
});