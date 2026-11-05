import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

const Divider = () => {
    return (
        <View style={styles.container} />
    );
};

export default Divider;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1,
        backgroundColor: '#888888',
        marginTop: 22,
        marginBottom: 60,
    },
});