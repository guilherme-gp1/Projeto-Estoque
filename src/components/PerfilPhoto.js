import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ProfilePlaceholder = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.imagem}
                resizeMode="contain"
            />
        </View>
    );
};

export default ProfilePlaceholder;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -40,
    },

    imagem: {
        width: 300,
        height: 300,
    },
});