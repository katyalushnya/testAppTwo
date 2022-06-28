import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Device from 'expo-device';

export default function DeviceInfo() {
    const brand = useState(Device.brand);
    const manufacturer = useState(Device.manufacturer);
    const design = useState(Device.designName);
    //<Text style={styles.text}> {Device.manufacturer} </Text>
    //<Text style={styles.text}> {Device.designName} </Text>

    return (
        <View style={styles.container}>
            <Text style={styles.text}> {brand} </Text>
            <Text style={styles.text}> {manufacturer} </Text>
            <Text style={styles.text}> {design} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
});
