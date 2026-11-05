import React from 'react';

import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';

const CustomInput = ({
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    value,
    onChangeText,
}) => {

    return (

        <View style={styles.container}>

            <TextInput
                style={styles.input}

                placeholder={placeholder}

                placeholderTextColor="#999999"

                secureTextEntry={secureTextEntry}

                keyboardType={keyboardType}

                value={value}

                onChangeText={onChangeText}

                autoCapitalize="none"

            />

        </View>

    );
};

export default CustomInput;

const styles = StyleSheet.create({

    container: {
        width: '100%',
        marginBottom: 14,
    },

    input: {
        width: '100%',
        height: 50,

        borderWidth: 1,
        borderColor: '#DDDDDD',

        borderRadius: 10,

        paddingHorizontal: 15,

        backgroundColor: '#FFFFFF',

        fontSize: 14,

        color: '#333333',
    },

});