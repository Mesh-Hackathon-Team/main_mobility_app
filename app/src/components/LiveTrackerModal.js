import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, Button, TouchableOpacity, ScrollView, Image } from "react-native";
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
                            <Text style={styles.trackerSubTitle}>seit 45 Minuten</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={props.modalOnCloseAction}>
                        <Feather name="x" color="#00FFB0" size={35} />
                    </TouchableOpacity>
                </View>
                <View style={styles.modalMap}>
                    <LiveTrackerMap />
                </View>
                <ScrollView>
                    <View style={styles.modalContent}>
                        <View style={styles.infoBox}>
                            <Image style={styles.infoBoxImage} source={require('../assets/welcomeIcons/nfc.png')} />
                            <Text style={styles.infoBoxText}>Du kannst die Fahrt jederzeit beenden, indem du an einem NFC Gerät auscheckst. </Text>
                        </View>
                        <View style={styles.progressItem}>
                            <View style={{ flexDirection: 'row' }}>
                                <View >
                                    <Text style={styles.progressItemTimeTop}>17:26</Text>
                                </View>
                                <View >
                                    <Text style={styles.progressItemTitleTop}>Aktueller Fahrtpreis</Text>
                                </View>
                            </View>
                            <View >
                                <Text style={styles.progressItemPriceTop}>2,85€</Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 4, borderBottomColor: '#F3F5F7', borderRadius: 8, marginVertical: 15 }} />
                        <View style={styles.progressItem}>
                            <View style={{ flexDirection: 'row' }}>
                                <View >
                                    <Text style={styles.progressItemTime}>17:24</Text>
                                </View>
                                <View >
                                    <Text style={styles.progressItemTitle}>Neuer Radius</Text>
                                </View>
                            </View>
                            <View >
                                <Text style={styles.progressItemPrice}>+ 1,20€</Text>
                            </View>
                        </View>
                        <View style={styles.progressItem}>
                            <View style={{ flexDirection: 'row' }}>
                                <View >
                                    <Text style={styles.progressItemTime}>16:45</Text>
                                </View>
                                <View >
                                    <Text style={styles.progressItemTitle}>Einstieg Jungfernstieg</Text>
                                </View>
                            </View>
                            <View >
                                <Text style={styles.progressItemPrice}>+ 0,65€</Text>
                            </View>
                        </View>
                        <View style={styles.progressItem}>
                            <View style={{ flexDirection: 'row' }}>
                                <View >
                                    <Text style={styles.progressItemTime}>16:45</Text>
                                </View>
                                <View >
                                    <Text style={styles.progressItemTitle}>Fahrtbeginn Grundgebühr</Text>
                                </View>
                            </View>
                            <View >
                                <Text style={styles.progressItemPrice}>+ 1,00€</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    infoBox: {
        backgroundColor: '#F3F5F7',
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    infoBoxImage: {
        width: 70,
        height: 70,
    },

    infoBoxText: {
        fontSize: 16,
        marginLeft: 20,
        flex: 1,
    },

    modalMap: {
        borderBottomWidth: 3,
        borderColor: '#00FFB0',
    },
    progressItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

    progressItemTime: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0A72F3'
    },

    progressItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000214',
        marginLeft: 10,
    },

    progressItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000214',
        marginLeft: 10,
    },

    progressItemTimeTop: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0A72F3'
    },

    progressItemTitleTop: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000214',
        marginLeft: 10,
    },

    progressItemPriceTop: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000214',
        marginLeft: 10,
    },

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
    },

    modalContentTitle: {
        fontSize: 28,
        fontWeight: 'bold'
    },

    modalContentPrice: {
        fontSize: 38,
        fontWeight: 'bold'
    },

    modalContentSubTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default LiveTrackerModal;