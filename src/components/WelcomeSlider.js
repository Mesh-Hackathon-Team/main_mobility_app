import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import Container from '../components/layout/Container';
import ContainerBoxed from '../components/layout/ContainerBoxed';
import { useSelector, useDispatch } from 'react-redux';
import { switchWelcomeStatus } from '../redux/actions/WelcomeActions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function WelcomeSlider() {

    const status = useSelector(state => state.WelcomeReducer.status);

    const dispatch = useDispatch();

    const moveBody = index => {
        this.scrollRef.scrollTo({
            x: index * width,
            animation: false
        })
    }

    return (
        <Container>
            <SafeAreaView>
                <ScrollView
                    horizontal={true}
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}
                    ref={node => this.scrollRef = node}
                >
                    <View style={{ height, width }}>
                        <View style={styles.innerContainer}>
                            <View>
                                <Image style={styles.sliderIcon} source={require('../assets/welcomeIcons/train.png')} />
                                <Text style={styles.sliderTitle}>Kontaktlos und entspannt unterwegs.</Text>
                                <Text style={styles.sliderSubTitle}>Mit Ryde kannst du das Ticket vergessen. Einfach einsteigen und losfahren. Wir übernehmen den Rest.</Text>
                            </View>
                            <View style={{ flexGrow: 1, flexDirection: "row", alignItems: "flex-end" }}>
                                <TouchableOpacity onPress={() => moveBody(1)} style={{ flexShrink: 0, width: width-60}}>
                                    <View style={styles.sliderButton}>
                                        <Text style={styles.sliderButtonTitle}>Weiter</Text>
                                        <Feather name="arrow-right" size={26} color="#212529" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={{ height, width }}>
                        <View style={styles.innerContainer}>
                            <View>
                                <Image style={styles.sliderIcon} source={require('../assets/welcomeIcons/money.png')} />
                                <Text style={styles.sliderTitle}>Unsere AI für deinen Geldbeutel.</Text>
                                <Text style={styles.sliderSubTitle}>Ryde analysiert und berechnet deine täglichen Routen, und bucht zu den günstigsten Tarifen.</Text>
                            </View>
                            <View style={{ flexGrow: 1, flexDirection: "row", alignItems: "flex-end" }}>
                                <TouchableOpacity onPress={() => moveBody(2)} style={{ flexShrink: 0, width: width-60}}>
                                    <View style={styles.sliderButton}>
                                        <Text style={styles.sliderButtonTitle}>Weiter</Text>
                                        <Feather name="arrow-right" size={26} color="#212529" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ height, width }}>
                        <View style={styles.innerContainer}>
                            <View>
                                <Image style={styles.sliderIcon} source={require('../assets/welcomeIcons/friend.png')} />
                                <Text style={styles.sliderTitle}>Sammle Punkte, und fahre mit Freunden.</Text>
                                <Text style={styles.sliderSubTitle}>Mit Ryde wird jede Fahrt zum Erlebnis. Fahre umweltfreundlich und erhalte mehr Punkte mit deinen Freunden.</Text>
                            </View>
                            <View style={{ flexGrow: 1, flexDirection: "row", alignItems: "flex-end" }}>
                                <TouchableOpacity onPress={() => moveBody(3)} style={{ flexShrink: 0, width: width-60}}>
                                    <View style={styles.sliderButton}>
                                        <Text style={styles.sliderButtonTitle}>Weiter</Text>
                                        <Feather name="arrow-right" size={26} color="#212529" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ height, width }}>
                        <View style={styles.innerContainer}>
                            <View>
                                <Text style={styles.sliderTitle}>Wähle deine Zahlungsmethode.</Text>
                                <TouchableOpacity onPress={() => moveBody(4)}><View style={styles.optionBox}>
                                    <Text style={styles.optionBoxTitle}>Pay-as-you-Go</Text>
                                    <Text style={styles.optionBoxText}>Kontaktlos und ohne Ticket ein und aussteigen. Zu jeder Tageszeit. Ryde berechnet den günstigsten Tarif beim aussteigen.</Text>
                                </View></TouchableOpacity>
                                <TouchableOpacity onPress={() => moveBody(4)}><View style={styles.optionBox}>
                                    <Text style={styles.optionBoxTitle}>Unlimited Abo</Text>
                                    <Text style={styles.optionBoxText}>Für monatlich 69,99€ in allen Radien in deinem ausgewählten Verkehrsunternehmen inklusive Bike Sharing, E-Scooter und mehr.</Text>
                                </View></TouchableOpacity>
                                <TouchableOpacity onPress={() => moveBody(4)}><Text style={{ fontSize: 14, fontStyle: 'italic', textAlign: 'center', marginTop: 20, color: '#adb5bd' }}>Ich möchte erstmal so schauen</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ height, width }}>
                        <View style={styles.innerContainer}>
                            <View>
                                <Image style={styles.sliderIcon} source={require('../assets/welcomeIcons/love.png')} />
                                <Text style={styles.sliderTitle}>Wir können es kaum erwarten.</Text>
                                <Text style={styles.sliderSubTitle}>Danke, dass du Dich für Ryde entschieden hast. Wir können es kaum erwarten mit Dir neues zu entdecken.</Text>
                            </View>
                            <TouchableOpacity onPress={() => dispatch(switchWelcomeStatus('opened'))}>
                                <View style={styles.sliderButton}>
                                    <Text style={styles.sliderButtonTitle}>Los geht's</Text>
                                    <Feather name="arrow-right" size={26} color="#212529" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Container>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        marginTop: 100,
        marginHorizontal: 30,
        flexDirection: 'column',
        marginBottom: 30,
        flexGrow: 1,
    },

    sliderTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
        color: '#000752'
    },

    sliderIcon: {
        height: 120,
        width: 120,
    },

    sliderSubTitle: {
        fontSize: 20,
        color: '#A8B0C7',
        lineHeight: 30,
    },

    sliderButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: "auto",
        backgroundColor: '#F6F6F6'
    },

    sliderButtonTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    optionBox: {
        padding: 20,
        borderColor: '#F6F6F6',
        borderWidth: 2,
        borderRadius: 12,
        marginTop: 20,
    },

    optionBoxTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 10,
        color: '#00FFB0',
    },

    optionBoxText: {
        fontSize: 18,
    }
});
