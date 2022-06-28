import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {checkConnected} from './components/function';
import {useNetInfo} from "@react-native-community/netinfo";

export default function App() {
    const netInfo = useNetInfo();

    /*
    * NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });
*
/*
    return (
        <View>
            <Text>Type: {netInfo.type}</Text>
            <Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
        </View>
    );
     */
    const [connectStatus,setConnectStatus] = useState(false)

    checkConnected().then(res=>{
        setConnectStatus(res)
    })

    const alertSomething = () =>{
        alert('alert something')
    }
    return (
        connectStatus?
            (<View style={styles.container}>
                <Text>Open up App.js to start working on your connected app!</Text>
                <StatusBar style="auto" />
            </View>):(
                <View style={styles.container}>
                    <Text>No connection</Text>
                    <StatusBar style="auto" />
                </View>
            )
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9df',
    alignItems: 'center',
    justifyContent: 'center',
  },
});