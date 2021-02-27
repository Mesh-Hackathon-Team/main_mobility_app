import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeHeaderDestinationItem(props) {
    return (
        <TouchableOpacity><View style={styles.item}>
            <Text style={styles.title}>{props.icon}</Text>
            <Text style={styles.title}>{props.title}</Text>
        </View></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius: 60,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginRight: 10,
        backgroundColor: '#F3F5F7',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18
    }
});
