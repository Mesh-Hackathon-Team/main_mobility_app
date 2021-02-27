import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ContainerBoxed from '../components/layout/ContainerBoxed';

export default ProfileScreen = ({ navigation, route }) => (
    <ContainerBoxed>
        <View style={{ marginVertical: 20 }}>
            <Image style={styles.profilPicture} source={require('../assets/profilBild.jpg')} />
            <Text style={styles.name}>Hannah Müller</Text>
            <View style={{flexDirection: "row", marginTop: 10}}>
                <Text style={styles.tabItem}>Übersicht</Text>
                <Text style={styles.tabItem}>Erfolge</Text>
                <Text style={styles.tabItem}>Statistiken</Text>
            </View>
        </View>
    </ContainerBoxed>
);

const styles = StyleSheet.create({
    profilPicture: {
        borderRadius: 50,
        height: 80,
        width: 80,
        backgroundColor: "#cccccc",
        marginTop: "auto",
        marginBottom: "auto",
    },
    name: {
        fontSize: 25,
        fontWeight: "200",
    },
    tabItem: {
        color: "#888888",
        marginRight: 20,
    }
});