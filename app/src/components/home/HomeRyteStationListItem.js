import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeRyteStationListItem(props) {
    return (
        <TouchableOpacity><View style={styles.item}>
            <View style={styles.itemImageContainer}>
                <Image style={styles.itemImage} source={props.image} />
            </View>

            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        marginTop: 10,
        borderRadius: 12,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor: '#F3F5F7',
        justifyContent: 'center',
        alignItems: 'center'
    },

    itemImageContainer: {
        height: 80,
        width: 80,
        borderWidth: 4,
        borderRadius: 120,
        borderColor: '#00FFB0',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 3.84,
        elevation: 5,
    },

    itemImage: {
        height: 50,
        width: 50,

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 10
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5
    }
});
