import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'


export default function Button({item, style, onPress}) {
    
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text>{item.titre}</Text>
            <Text>{item.description}</Text>
            <Text>{ "note:" + item.note}</Text>

        </TouchableOpacity>
    )
}