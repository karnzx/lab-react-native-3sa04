import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <View style={styles.row}>
                <Text style={styles.boldText}>Weather : </Text>
                <Text style={styles.Text}>{props.main}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.boldText}>Description : </Text>
                <Text style={styles.Text}>{props.description}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.boldText}>Lattitude : </Text>
                <Text style={styles.Text}>{props.lat}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.boldText}>Longitude : </Text>
                <Text style={styles.Text}>{props.lon}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.boldText}>Temp : </Text>
                <Text style={styles.Text}>{props.temp}°C</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.boldText}>Humidity : </Text>
                <Text style={styles.Text}>{props.humidity}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.boldText}>Pressure : </Text>
                <Text style={styles.Text}>{props.pressure}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.boldText}>WindSpeed : </Text>
                <Text style={styles.Text}>{props.windSpeed}</Text>
            </View>
        </View >
    );
}


const styles = StyleSheet.create({
    boldText: { fontSize: 18, fontWeight: 'bold' },
    Text: { fontSize: 18 },
    row: {
        flexDirection: 'row'
    }
});

