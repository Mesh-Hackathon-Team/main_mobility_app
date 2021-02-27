import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, Dimensions, TouchableOpacity, Pressable, Modal } from "react-native";
import { Feather } from '@expo/vector-icons';
import LiveTrackerModal from './LiveTrackerModal';
const { width, height } = Dimensions.get('window');

export default BottomLiveTracker = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false);
    }

    return (
        <View style={styles.touchContainer}>
            <TouchableOpacity onPress={showModal} style={styles.trackerContainer}>
                <Feather name="radio" color="#00FFB0" size={35} />
                <View style={styles.textContainer}>
                    <Text style={styles.trackerTitle}>Tracking aktiv</Text>
                    <Text style={styles.trackerSubTitle}>Du bist derzeit auf der Linie U4 unterwegs</Text>
                </View>
            </TouchableOpacity>
            <LiveTrackerModal modalStatus={modalVisible} modalOnCloseAction={() => hideModal()} />
        </View>
    );
}

const styles = StyleSheet.create({
    touchContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: "#000752",
        height: 70,
        width: width,
    },
    trackerContainer: {
        height: 70,
        width: width,
        backgroundColor: "#000214",
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