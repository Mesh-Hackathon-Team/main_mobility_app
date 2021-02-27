import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import HomeHeaderDestinationItem from './HomeHeaderDestinationItem';

const DESTINATIONS = [
    {
        id: '1',
        title: 'Club',
        icon: '🤮'
    },
    {
        id: '2',
        title: 'Uni',
        icon: '🧑‍🎓'
    },
    {
        id: '3',
        title: 'Arbeit',
        icon: '🤑'
    },
    {
        id: '4',
        title: 'Mami & Papi',
        icon: '👨‍👩‍👧'
    },
    {
        id: '5',
        title: 'Dulfs Burger',
        icon: '🍔'
    },
    {
        id: '6',
        title: 'Fitnessclub',
        icon: '💪'
    },
    {
        id: '7',
        title: 'Hinzufügen',
        icon: '+ '
    },
];

export default function HomeHeader(props) {
    const renderItem = ({ item }) => (
        <HomeHeaderDestinationItem title={item.title} icon={item.icon} />
    );
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Howdy Laura, 👋</Text>
                <Text style={styles.headerSubTitle}>wo werden wir Dich heute hin begleiten?</Text>
            </View>
            <SafeAreaView>
                <FlatList
                    data={DESTINATIONS}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingLeft: 25, marginVertical: 15 }}
                />
            </SafeAreaView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginHorizontal: 25,
        marginTop: 40,
    },

    headerTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000214'
    },

    headerSubTitle: {
        fontSize: 24,
        color: '#000214',
    }
});
