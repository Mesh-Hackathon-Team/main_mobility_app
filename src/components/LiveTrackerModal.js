import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, Button, TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get('window');
import { Feather } from '@expo/vector-icons';
// import { TouchableOpacity } from "react-native-gesture-handler";
import LiveTrackerMap from "./LiveTrackerMap";

const LiveTrackerModal = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalStatus}
        >
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <View style={styles.textContainer}>
                        <Feather name="radio" color="#00FFB0" size={35} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={styles.trackerTitle}>Tracking aktiv</Text>
                            <Text style={styles.trackerSubTitle}>seit 12 Minuten</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={props.modalOnCloseAction}>
                        <Feather name="x" color="#00FFB0" size={35} />
                    </TouchableOpacity>
                </View>
                <View style={styles.modalMap}>
                    <LiveTrackerMap />
                </View>
                <View style={styles.modalContent}>
                    <Text>Test</Text>
                </View>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({

    modalView: {
        backgroundColor: "#ffffff",
        paddingTop: 35,
        flex: 1,
        backgroundColor: '#000752'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

    modalHeader: {
        height: 70,
        width: width,
        backgroundColor: "#000752",
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
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    trackerTitle: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold'
    },

    textContainer: {

        flexDirection: 'row'
    },

    trackerSubTitle: {
        color: '#DBE0E6',
        fontStyle: 'italic'
    },

    modalContent: {
        paddingHorizontal: 25,
        backgroundColor: '#ffffff',
        padding: 25,
    }
});

export default LiveTrackerModal;