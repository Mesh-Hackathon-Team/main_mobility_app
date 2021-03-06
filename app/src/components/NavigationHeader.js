import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { navigate } from '../RootNavigation';

export default NavigationHeader = (props) => {

    return (
        <View style={styles.container}>
            {/* Profilbild */}
            <TouchableOpacity onPress={() => navigate('Profile')}>
                <Image style={styles.profilPicture} source={require('../assets/profilBild.jpg')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    progressBar: {
        height: 13,
        overflow: "visible",
        backgroundColor: "#ECECEC",
        borderRadius: 20,
        marginRight: 15,
        marginTop: "auto",
        marginBottom: "auto",
        overflow: "hidden",
    },
    profilPicture: {
        borderRadius: 50,
        height: 50,
        width: 50,
        backgroundColor: "#cccccc",
        marginTop: "auto",
        marginBottom: "auto",
    },
    container: {
        margin: 20,
        marginTop: 60,
        marginLeft: 33,
        marginBottom: 40,
        height: 50,
        flexDirection: 'row',
    }
});