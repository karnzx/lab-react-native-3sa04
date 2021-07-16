import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, View, Text, Button, Image } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        humidity: 0,
        pressure: 0,
        lat: 0,
        lon: 0,
        description: '-',
        temp: 0,
        windSpeed: 0,
        dataAt: '-'
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${props.zipCode},th&units=metric&APPID=738f516216e56b0d8ddf10dd9fe2edea`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        humidity: json.main.humidity,
                        pressure: json.main.pressure,
                        lat: json.coord.lat,
                        lon: json.coord.lon,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        dataAt: json.name,
                        windSpeed: json.wind.speed
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Image
                source={require('../bg.png')}
                style={{ width: 130, height: 130, margin: 20 }} />
            <View style={styles.card}>
                <Text style={styles.boldText}> Zip Code : </Text>
                <Text style={styles.Text}>{props.zipCode}</Text>
            </View>
            <View style={styles.bigcard}>
                <Forecast {...forecastInfo} />
            </View>
            <Button
                title="More Detial"
                onPress={() => { }}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    boldText: { fontSize: 18, fontWeight: 'bold' },
    Text: { fontSize: 18 },
    card: {
        flexDirection: 'row',
        padding: 15,
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
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 20,
    },
    backdrop: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
});