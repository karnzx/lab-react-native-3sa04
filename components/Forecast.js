import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <TextDetail title="Weather" text={props.main} />
            <TextDetail title="Description" text={props.description} />
            <TextDetail title="Lattitude" text={props.lat} />
            <TextDetail title="Longitude" text={props.lon} />
            <TextDetail title="Temp" text={props.temp} suffix='°C' />
            <TextDetail title="Humidity" text={props.humidity} />
            <TextDetail title="Pressure" text={props.pressure} />
            <TextDetail title="WindSpeed" text={props.windSpeed} />
        </View >
    );
}

function TextDetail({ title, text, suffix }) {
    return (
        <View style={styles.row}>
            <Text style={styles.boldText}>{title} : </Text>
            <Text style={styles.Text}>{text} {suffix}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    boldText: { fontSize: 18, fontWeight: 'bold' },
    Text: { fontSize: 18 },
    row: {
        flexDirection: 'row'
    }
});

