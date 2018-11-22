import React from 'react';
import { Text, View } from 'react-native';
import ES from 'react-native-extended-stylesheet';

export default Main = () => (
    <View style={styles.container}>
        <Text>Home</Text>
    </View>
)

const styles = ES.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$colorEggplant',
    }
})