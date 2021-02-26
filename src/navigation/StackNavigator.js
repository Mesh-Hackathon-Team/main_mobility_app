import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "../screens/HomeScreen";

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
                    title: 'Instagram',
                    headerLeft: () => (
                        <View style={{ marginLeft: 25, }}>

                            <View>
                                <TouchableOpacity onPress={() => navigation.openDrawer()}><Feather name="menu" size={25} color="black" /></TouchableOpacity>
                            </View>
                        </View>
                    ),
                }}
            />
        </Stack.Navigator>
    );
}


export { MainStackNavigator };