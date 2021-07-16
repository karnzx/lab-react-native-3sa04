import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${props.zipCode},th&units=metric&APPID=738f516216e56b0d8ddf10dd9fe2edea`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.card}>
                <Text>{props.place}</Text>
                <Text> Zip Code : </Text>
                <Text>{props.zipCode}</Text>
            </View>
            <View style={styles.bigcard}>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 20,
        marginBottom: 20,
        paddingLeft: 80,
        paddingRight: 80,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 20,
    },
    bigcard: {
        padding: 50,
        marginBottom: 20,
        paddingLeft: 80,
        paddingRight: 80,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 20,
    },
    backdrop: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
});