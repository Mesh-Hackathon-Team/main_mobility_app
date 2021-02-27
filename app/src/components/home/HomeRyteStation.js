import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import HomeRyteStationListItem from './HomeRyteStationListItem';

const OPTIONS = [
    {
        id: '1',
        title: 'E-Bikes',
        subtitle: '8/10',
        image: require('../../assets/typeIcons/bike.png')
    },
    {
        id: '2',
        title: 'E-Scooter',
        subtitle: '1/6',
        image: require('../../assets/homeIcons/moon.png')
    },
    {
        id: '3',
        title: 'E-Autos',
        subtitle: '0/5',
        image: require('../../assets/typeIcons/bike.png')
    },
    {
        id: '4',
        title: 'Metro',
        subtitle: 'in 5 Minuten',
        image: require('../../assets/typeIcons/bike.png')
    },
    {
        id: '5',
        title: 'Bus',
        subtitle: 'in 12 Minuten',
        image: require('../../assets/typeIcons/bike.png')
    },

];

export default function HomeRyteStation(props) {

    const renderItem = ({ item }) => (
        <HomeRyteStationListItem title={item.title} subtitle={item.subtitle} image={item.image} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.stationHeader}>
                <View>
                    <Text style={styles.stationHeaderTopTitle}>IN DEINER UMGEBUNG:</Text>
                    <Text style={styles.stationHeaderTitle}>EnBW Ryde Station</Text>

                </View>
                <View style={styles.stationHeaderImageContainer}>
                    <Image style={styles.stationHeaderImage} source={require('../../assets/enbw_logo.jpg')} />
                </View>
            </View>
            <View style={styles.stationContent}>
                <FlatList
                    data={OPTIONS}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingLeft: 25, marginVertical: 15 }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F5F7',
        paddingVertical: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 3.84,
        elevation: 5,
    },

    stationHeader: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    stationHeaderImage: {
        height: 50,
        width: 90

    },

    stationHeaderImageContainer: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 100,
        borderRadius: 12,

    },

    stationHeaderTopTitle: {
        fontWeight: 'bold',
        color: '#000214',
    },

    stationHeaderTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000214',
    },

    stationHeaderSubTitle: {
        marginTop: 3,
        color: '#adb5bd',
    },
});
