import React from 'react';
import { SafeAreaView } from 'react-native';
import ES from 'react-native-extended-stylesheet';

import styles from './src/common/styles';
import TabNavigator from './src/common/Navigator';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={layout.container}>
                <TabNavigator />
            </SafeAreaView>
        );
    }
}

const layout = ES.create({
    container: {
        flex: 1,
        backgroundColor: '$colorEggplant'
    },
});