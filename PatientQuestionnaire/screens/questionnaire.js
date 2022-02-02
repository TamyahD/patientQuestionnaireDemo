import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image, TextInput } from 'react-native';

import Slider from '@react-native-community/slider';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import { Formik } from 'formik';


export default function Questionnaire({ navigation }) {
    const initialVal = 0;
    const [sliderNum, setSliderNum] = useState(initialVal);

    const [firstN, setFirstN] = useState('');
    const [lastN, setLastN] = useState('');

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleButton = (ans) => {
        setIsEnabled(ans)
    }

    
    return (
        <View style={styles.container}>
            <Formik initialValues={{
                firstN: '', lastN: '',
                sliderNum: 0, famPhysician: false}}
            onSubmit={(values) => {
                console.log(values)

            }}>
                {(formikProps) => (

                <View style={styles.container}>

            {/* Questionnaire Title */}
            <Text style={styles.titleText}>Patient Questionnaire</Text>
            {/* Image Icon */}
            <Image source={require('../assets/images/formIcon.png')} />

            <TextInput
                placeholder={'First Name'}
                style={styles.textInput}
                onChangeText={formikProps.handleChange('firstN')}
                value={formikProps.values.firstN}>
            </TextInput>
            {/* TESTER <Text>first name: {firstN}</Text> */}
            <TextInput
                placeholder={'Last Name'}
                style={styles.textInput}
                onChangeText={formikProps.handleChange('lastN')}
                value={formikProps.values.lastN}>
            </TextInput>
            {/* TESTER <Text>last name: {lastN}</Text> */}


            {/* Patient Sick Scale */}
            {/* scale indicator icons */}
            <View style={styles.scaleContainer}>
                <Image style={styles.scaleIcons} source={require('../assets/images/scale0.png')}></Image>
                <Image style={styles.scaleIcons} source={require('../assets/images/scale1.png')}></Image>
                <Image style={styles.scaleIcons} source={require('../assets/images/scale2.png')}></Image>
                <Image style={styles.scaleIcons} source={require('../assets/images/scale3.png')}></Image>
                <Image style={styles.scaleIcons} source={require('../assets/images/scale4.png')}></Image>
                <Image style={styles.scaleIcons} source={require('../assets/images/scale5.png')}></Image>
            </View>

            <View style={styles.scaleSlider}>
                <Slider
                    // line scale range 0 to 10
                    trackImage={require('../assets/images/scaleLine.png')}
                    step={1}
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={10}
                    onValueChange={(sliderNum) => setSliderNum(sliderNum)}
                    value={formikProps.values.sliderNum}
                />
                <Text>Scale: {sliderNum}</Text>
            </View>

            <Text>Do you have a family physician?</Text>
            {/* true/false toggle button */}
            <Switch
            // yes:no colors
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleButton}
                value={isEnabled}
            />
            <Text>{(isEnabled) ? 'Yes' : 'No'}</Text>

            <AwesomeButtonRick
                style={{marginTop: '8%'}}
                width={150}
                type="anchor"
                onPress={() => null}
               >Submit
            </AwesomeButtonRick>

                </View>
                )}

            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '3%',
        // marginBottom: 15,
    },
    titleText: {
        marginTop: 4,
        fontSize: 30,
        fontWeight: 'bold',
    },
    textInput: {
        height: 50,
        width: 300,
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: '#fff',
        marginBottom: '3%',
        textAlign: 'center',
    },
    slider: {
        width: 310,
        height: 15,
        marginTop: 5,
    },
    scaleContainer: {
        // flex: 1,
        flexDirection: 'row',
        marginBottom: 7,
    },
    scaleIcons: {
        width: 30,
        height: 30,
        justifyContent: 'space-between',
        margin: 13,
    },
    scaleSlider: {
        alignItems: 'center',
        marginBottom: '10%',
    },
})