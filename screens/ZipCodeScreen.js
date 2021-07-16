import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]


const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', { zipCode: code })
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation();
    return (
        <View style={{}}>
            <FlatList
                data={availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({

    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        margin: 20,
        backgroundColor: 'lightyellow',
        borderRadius: 30,
        elevation: 10
    },
    zipPlace: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    zipCode: {
        fontSize: 14,
    },
});