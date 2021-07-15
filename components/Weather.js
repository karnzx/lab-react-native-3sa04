import React, { useState } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <ImageBackground soure={require('../bg.png')} style={styles.backdrop}>
            <Forecast {...forecastInfo} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
});