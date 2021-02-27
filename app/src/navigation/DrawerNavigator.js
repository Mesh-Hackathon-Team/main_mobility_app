import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationStackNavigator, MainStackNavigator } from "./StackNavigator";
import MainTabNavigator from './TabNavigator';
import NavigationHeader from '../components/NavigationHeader';
import { navigate } from '../RootNavigation';

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

            drawerContent={DrawerCompontent}
        >
            <Drawer.Screen
                name="Home"
                component={MainTabNavigator}
                options={{
                    title: '#home',
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={MainTabNavigator}
                options={{
                    title: '#profile',
                }}
            />
            <Drawer.Screen
                name="Stations"
                component={MainTabNavigator}
                options={{
                    title: '#stations',
                }}
            />
            <Drawer.Screen
                name="Aboutus"
                component={MainTabNavigator}
                options={{
                    title: '#aboutus',
                }}
            />
            <Drawer.Screen
                name="supporters"
                component={MainTabNavigator}
                options={{
                    title: '#supporters',
                }}
            />
        </Drawer.Navigator>
    );
}

const DrawerCompontent = (props) => (
    <View style={{ backgroundColor: "#000214", height: "100%" }}>
        <NavigationHeader xp={13} xpwith={10} />
        <DrawerItemList
            {...props}
            itemStyle={{
                backgroundColor: "transparent",
                marginLeft: 30,
            }}
            labelStyle={{
                fontSize: 35,
                fontWeight: "700",
                fontStyle: "italic",
                color: "#00FFB0",
            }}
        />
    </View>
)

export default MainDrawerNavigator;