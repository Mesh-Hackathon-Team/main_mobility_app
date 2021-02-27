import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { MainStackNavigator } from "./StackNavigator";

import { Feather } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#00FFB0"
            barStyle={{ backgroundColor: '#000214' }}
        >
            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Ryde',
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Suche',
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Bookmarks"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Gespeichert',
                    tabBarIcon: ({ color }) => (
                        <Feather name="bookmark" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Mehr',
                    tabBarIcon: ({ color }) => (
                        <Feather name="more-horizontal" color={color} size={22} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;