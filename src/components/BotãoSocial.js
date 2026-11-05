import React from 'react';

import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const SocialButton = ({
    type,
    onPress,
}) => {

    const isGoogle = type === 'google';

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.8}
        >

            {isGoogle ? (
                <Text style={styles.googleIcon}>
                    G
                </Text>
            ) : (
                <Ionicons
                    name="logo-apple"
                    size={25}
                    color="#444444"
                />
            )}

        </TouchableOpacity>
    );
};

export default SocialButton;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 35,
        borderWidth: 1,
        borderColor: '#D0D0D0',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginBottom: 26,
        elevation: 1,
    },

    googleIcon: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4285F4',
    },
});