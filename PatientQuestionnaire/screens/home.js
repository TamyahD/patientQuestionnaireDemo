import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Sharp Health</Text>
            {/* Logo */}
            <Image source={require('../assets/images/homeIcon.png')} />

            {/* Buttons navigate to questionnaire */}
            <AwesomeButtonRick
                width={130}
                onPress={(next) => {
                    navigation.navigate("Questionnaire")
                    next()
                }}>
                {/* button title */}
                Patient Questionnaire
            </AwesomeButtonRick>

            <View>
                <Text style={styles.footerText}>
                    Thank you for referring your family and
                    friends to our practice!
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 45,
        fontWeight: 'bold',
    },
    footerText: {
        marginTop: '7%',
        fontSize: 28,
        textAlign: 'center',
        textDecorationLine: 'none',
        color: 'black',
    },
});