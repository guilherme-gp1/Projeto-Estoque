import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const RememberPassword = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rememberContainer}>
                <View style={styles.checkbox} />
                <Text style={styles.rememberText}>
                    Lembrar
                </Text>
            </View>

            <View>
                <Text style={styles.forgotText}>
                    Esqueceu Sua Senha
                </Text>
            </View>
        </View>
    );
};

export default RememberPassword;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 56,
    },

    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    checkbox: {
        width: 12,
        height: 12,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        borderRadius: 2,
        marginRight: 4,
    },

    rememberText: {
        fontSize: 11,
        color: '#222222',
    },

    forgotText: {
        fontSize: 11,
        color: '#0000EE',
        textDecorationLine: 'underline',
    },
});