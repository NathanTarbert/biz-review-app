import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Details({ navigation }) {

    // pressHandler = () => {//this gives tells our button to go back by accessing the navigation prop
    //     navigation.goBack();
    // };

    return (
        <View style={globalStyles.container} >
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('body') }</Text>
            <Text>{ navigation.getParam('rating') }</Text>
        </View>
    )
}