import React from 'react';
import { View } from 'react-native';
import ES from 'react-native-extended-stylesheet';

import Text from '../components/Text';

export default Main = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
    </View>
)

const styles = ES.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$colorEggplant',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '$colorPurple'
    }
})