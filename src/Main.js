import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainDrawerNavigator from './navigation/DrawerNavigator';
import { navigationRef } from './RootNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { switchWelcomeStatus } from './redux/actions/WelcomeActions';
import WelcomeSlider from './components/WelcomeSlider';


export default function Main() {

    const status = useSelector(state => state.WelcomeReducer.status);

    const dispatch = useDispatch();

    if (status === 'opened') {
        return (
            <WelcomeSlider />
        )
    } else {
        return (
            <NavigationContainer ref={navigationRef}>
                <MainDrawerNavigator />
            </NavigationContainer>
        );
    }

}
