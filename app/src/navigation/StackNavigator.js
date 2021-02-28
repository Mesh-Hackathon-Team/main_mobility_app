import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NFCScreen from "../screens/NFCScreen";
import TicketScreen from "../screens/TicketScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {

};

const MainStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Ryde',
                    headerLeft: () => (
                        <View style={{ marginLeft: 25, }}>

                            <View>
                                <TouchableOpacity onPress={() => navigation.openDrawer()}><Feather name="menu" size={25} color="black" /></TouchableOpacity>
                            </View>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: 25, flexDirection: 'row' }}>
                            <View style={{ marginRight: 15 }}>
                                <TouchableOpacity><Feather name="compass" size={25} color="black" /></TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity><Feather name="rss" size={25} color="black" /></TouchableOpacity>
                            </View>
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="nfc"
                component={NFCScreen}
                options={{
                    title: 'Check-In / Check-Out',

                }}
            />
            <Stack.Screen
                name="Ticket"
                component={TicketScreen}
                options={{
                    title: 'Check-In / Check-Out',

                }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Stack.Navigator>
    );
}


export { MainStackNavigator };