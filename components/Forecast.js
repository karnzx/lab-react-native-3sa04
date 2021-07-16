import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Forecast(props) {
    return (
        <View >
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <View>
                <Text>{props.temp}°C</Text>
            </View>
        </View >
    );
}
