import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function WelcomeFrame() {
    const currentTime = timeExpression();
    console.log(currentTime);
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.space} />
                <Image style={styles.image} source={currentTime[1]} />


                {console.log(timeExpression()[1])
                }

                <Text style={styles.gutenMorgenText}>
                    {currentTime[0]}
                    {" Hannah" + ","}
                </Text>
                
                <View style={styles.lineBreaker}>
                    <Text style={styles.ankuftszeitText}>
                        {"sammle noch 412 Punkte um das nächste Level zu erreichen"}
                    </Text>
                </View>

            </View>
            <View style={styles.space} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: "visible",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },


    gutenMorgenText: {
        overflow: "hidden",
        color: "#000000",
        fontStyle: "normal",
        fontSize: 30,
    },

    ankuftszeitText: {
        overflow: "hidden",
        color: "#000000",
        fontStyle: "normal",
        left: 10,
    },

    space: {
        height: 5,
    },

    lineBreaker: {
        width: 250,
    },

    image: {
        height: 50,
        width: 50,
    },

});

const timeExpression = () => {
    let time = new Date().getHours();
    let out = [];
    if (time < 12) {
        out.push("Guten Morgen");
    } else if (time < 18) {
        out.push("Hallo");
    } else {
        out.push("Guten Abend");
    }

    if (time >= 6 && time <= 18) {
        out.push(require('../assets/homeIcons/sun.png'));
    } else {
        out.push(require('../assets/welcomeIcons/moon.png'));
    }

    return out;
}
