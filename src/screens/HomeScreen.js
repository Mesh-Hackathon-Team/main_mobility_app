import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from '../components/layout/Container';
import ContainerBoxed from '../components/layout/ContainerBoxed';
import HelloFrame from '../components/HelloFrame';
import TrackedFrame from '../components/TrackedFrame';

export default function HomeScreen() {
    return (
        <Container>
            <ContainerBoxed>
                <HelloFrame/>
                <View style={styles.space}/>
                <TrackedFrame/>
            </ContainerBoxed>
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
    space:{
        height: 20,
    }
});
