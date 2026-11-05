import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const PrimaryButton = ({ texto, onPress }) => {

  return (

    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >

      <Text style={styles.text}>
        {texto}
      </Text>

    </TouchableOpacity>

  );
};

export default PrimaryButton;

const styles = StyleSheet.create({

  button: {
    width: '100%',
    height: 50,

    backgroundColor: '#4D90F5',

    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 8,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

});