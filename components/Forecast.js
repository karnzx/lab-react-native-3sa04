import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <TextDetail title="Weather" text={props.main} />
            <TextDetail title="Description" text={props.description} />
            <TextDetail title="Lattitude" text={props.lat} />
            <TextDetail title="Longitude" text={props.lon} />
            <TextDetail title="Temp" text={props.temp} suffix='°C' />
            <TextDetail title="Humidity" text={props.humidity} suffix='%' />
            <TextDetail title="Pressure" text={props.pressure} suffix='hPa' />
            <TextDetail title="WindSpeed" text={props.windSpeed} uffix='meter/sec' />
            <TextDetail title="dataAt" text={props.dataAt} />
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

