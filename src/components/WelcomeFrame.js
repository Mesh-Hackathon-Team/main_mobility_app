import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeFrame() {
    return (
        <View style={styles.container}>
            <View style={styles.centerView}>
                <View style={styles.space}/>

                <Text style={styles.gutenMorgenText}>
                    {timeExpression()}
                    {" Julian" + ","}
                </Text>
                <View style={styles.lineBreaker}>
                    <Text style={styles.ankuftszeitText}>
                        {"sammle noch 412 Punkte um das nächste Level zu erreichen"}
                    </Text>
                </View>
            
            </View>
            <View style={styles.space}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: "visible",
        borderRadius: 30,
        justifyContent:'center',
        //alignItems: 'center',
    },

    centerView:{
        left: 20,
    },

    gutenMorgenText:{
        overflow: "hidden",
        color: "#000000",
        fontStyle: "normal",
        fontSize: 30,
    },

    ankuftszeitText:{
        overflow: "hidden",
        color: "#000000",
        fontStyle: "normal",
        left: 10,
    },

    space:{
        height: 5,
    },

    lineBreaker:{
        width: 250,
    },

});

const timeExpression = () => {
    let time = new Date().getHours();
    if(time < 12){
        return "Guten Morgen";
    }else if(time<18){
        return "Guten Tag";
    }else{
        return "Guten Abend";
    }
}
