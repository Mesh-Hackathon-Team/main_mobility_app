import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default NavigationHeader = (props) => {
    return (
        <View style={styles.container}>
            {/* Statusleiste */}
            <View style={{ flexGrow: 1 }}>
                <View style={styles.progressBar}>
                    <View style={{ backgroundColor: "#4fcfe8", width: `${props.xpwith}%`, height: 13 }} />
                </View>
                <View>
                    <Text>{props.xp} XP</Text>
                </View>
            </View>

            {/* Profilbild */}
            <Image style={styles.profilPicture} source={require('../assets/profilBild.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    progressBar: {
        height: 13,
        overflow: "visible",
        backgroundColor: "#99eeff",
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
        marginBottom: 40,
        height: 50,
        flexDirection: 'row',
    }
});