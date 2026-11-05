import React, { useEffect } from 'react';

import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default function Splash({ navigation }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);

  }, [navigation]);

  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/imgspl.png')}
        style={styles.imagem}
        resizeMode="cover"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  imagem: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
});