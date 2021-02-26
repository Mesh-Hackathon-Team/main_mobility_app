import React from "react";
import { View, Text } from "react-native";

export default NavigationHeader = () => {
    return (
        <View style={style}>
            {/* Statusleiste */}
            <View style={round}>
                <View style={{ backgroundColor: "#4fcfe8", width: "30%", height: 13}} />
            </View>

            {/* Profilbild */}
            <View style={profilPicture}>

            </View>
        </View>
    );
}

const round = {
    height: 13,
    flexGrow: 1,
    overflow: "visible",
    backgroundColor: "#99eeff",
    borderRadius: 20,
    marginRight: 15,
    marginTop: "auto",
    marginBottom: "auto",
    overflow: "hidden",
}

const profilPicture = {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: "#cccccc",
    marginTop: "auto",
    marginBottom: "auto",
}

const style = {
    margin: 20,
    marginTop: 60,
    marginBottom: 40,
    height: 50,
    flexDirection: 'row',
}