import React from 'react'
import { text } from 'react-native'

export default function Weather(props) {
    return (
        <Text>{props.zipCode}</Text>
    );
}