import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Audio } from 'expo-av';

import { globalStyles } from '../styles/global';

export default function Home() {

    const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/sounds/mixkit-rising-harp-music-691.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

    return (
        <View style={globalStyles.container} >
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title="Play Sound" onPress={playSound} />
        </View>
    )
}
