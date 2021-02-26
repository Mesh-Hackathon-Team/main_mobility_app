import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainDrawerNavigator from './navigation/DrawerNavigator';

export default function Main() {
    return (
        <NavigationContainer>
            <MainDrawerNavigator />
        </NavigationContainer>
    );
}
