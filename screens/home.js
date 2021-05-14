import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const [reviews, setRevies] = useState([
    {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
    {title: 'Gotta Catch Them All Again', rating: 4, body: 'lorem ipsum', key: '2'},
    {title: 'Not So "Final Fantasy', rating: 3, body: 'lorem ipsum', key: '3'}
  ]);

  //   const [sound, setSound] = React.useState();

  // async function playSound() {
  //   console.log('Loading Sound');
  //   const { sound } = await Audio.Sound.createAsync(
  //      require('../assets/sounds/mixkit-rising-harp-music-691.wav')
  //   );
  //   setSound(sound);

  //   console.log('Playing Sound');
  //   await sound.playAsync(); }

  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log('Unloading Sound');
  //         sound.unloadAsync(); }
  //     : undefined;
  // }, [sound]);

  // const pressHandler = () => {
  //   navigation.navigate('Details');
  //   // navigation.push('Details');
  // };

    return (
        <View style={globalStyles.container} >
            <FlatList
            data={reviews}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                <Text style={globalStyles.titleText}>{ item.title }</Text>
              </TouchableOpacity>
            )}
            />
        </View>
    )
}
