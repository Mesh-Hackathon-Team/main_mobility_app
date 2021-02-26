import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationStackNavigator, MainStackNavigator } from "./StackNavigator";
import MainTabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
                width: 320,
            }}

            options={{
                headerTitle: "App"
            }}
        >
            <Drawer.Screen
                name="Home"
                component={MainTabNavigator}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size, color }) => (
                        <View style={{ marginLeft: 15, }}><Feather name="home" size={size} color={color} /></View>
                    )
                }}
            />
            <Drawer.Screen
                name="Bookmarks"
                component={MainTabNavigator}
                options={{
                    title: 'Gespeichert',
                    drawerIcon: ({ focused, size, color }) => (
                        <View style={{ marginLeft: 15, }}><Feather name="bookmark" size={size} color={color} /></View>
                    )
                }}
            />
            <Drawer.Screen
                name="Posts"
                component={MainTabNavigator}
                options={{
                    title: 'Deine Anzeigen',
                    drawerIcon: ({ focused, size, color }) => (
                        <View style={{ marginLeft: 15, }}><Feather name="archive" size={size} color={color} /></View>
                    )
                }}
            />
            <Drawer.Screen
                name="Safety"
                component={MainTabNavigator}
                options={{
                    title: 'Sicherheit',
                    drawerIcon: ({ focused, size, color }) => (
                        <View style={{ marginLeft: 15, }}><Feather name="lock" size={size} color={color} /></View>
                    )
                }}
            />
            <Drawer.Screen
                name="Account"
                component={MainTabNavigator}
                options={{
                    title: 'Konto',
                    drawerIcon: ({ focused, size, color }) => (
                        <View style={{ marginLeft: 15, }}><Feather name="user" size={size} color={color} /></View>
                    )
                }}
            />
            <Drawer.Screen
                name="Information"
                component={MainTabNavigator}
                options={{
                    title: 'Info',
                    drawerIcon: ({ focused, size, color }) => (
                        <View style={{ marginLeft: 15, }}><Feather name="info" size={size} color={color} /></View>
                    )
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={MainTabNavigator}
                options={{
                    title: 'Einstellungen',
                    drawerIcon: ({ focused, size, color }) => (
                        <View style={{ marginLeft: 15, }}><Feather name="settings" size={size} color={color} /></View>
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

export default MainDrawerNavigator;