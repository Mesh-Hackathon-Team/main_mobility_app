import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainDrawerNavigator from './navigation/DrawerNavigator';
import { navigationRef } from './RootNavigation';

export default function Main() {
    return (
        <NavigationContainer ref={navigationRef}>
            <MainDrawerNavigator />
        </NavigationContainer>
    );
}
