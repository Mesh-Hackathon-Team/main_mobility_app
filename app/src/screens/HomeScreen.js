import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Container from '../components/layout/Container';
import ContainerBoxed from '../components/layout/ContainerBoxed';
import FreieFahrtFrame from '../components/FreieFahrtFrame';
import TrackedFrame from '../components/TrackedFrame';
import WelcomeFrame from '../components/WelcomeFrame';
import BottomLiveTracker from '../components/BottomLiveTracker';
import HomeHeader from '../components/home/HomeHeader';
import HomeRyteStation from '../components/home/HomeRyteStation';
import HomeNearbyList from '../components/home/HomeNearbyList';
import HomeFavouriteRoutes from '../components/home/HomeFavouriteRoutes';

export default function HomeScreen() {
    return (
        <Container >
            <ScrollView >
                <View style={{ flex: 1, }}>
                    <HomeHeader />
                    <HomeRyteStation />
                    <HomeNearbyList />
                    <HomeFavouriteRoutes />
                    <ContainerBoxed>
                        <View style={styles.space} />
                        <WelcomeFrame />
                        <View style={styles.space} />
                        <FreieFahrtFrame />
                        <View style={styles.space} />
                        <TrackedFrame />
                        <View style={styles.space} />
                        <WelcomeFrame />
                        <View style={styles.space} />
                        <FreieFahrtFrame />
                        <View style={styles.space} />
                        <TrackedFrame />
                    </ContainerBoxed>
                </View>
            </ScrollView>
            <BottomLiveTracker />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    space: {
        height: 20,
    }
});
