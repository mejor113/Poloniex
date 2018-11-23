import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'mobx-react';
import ES from 'react-native-extended-stylesheet';

import styles from './src/common/styles';
import MainStore from './src/common/store';
import TabNavigator from './src/common/Navigator';

const stores = {
    MainStore,
};

export default class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <SafeAreaView style={layout.container}>
                    <TabNavigator />
                </SafeAreaView>
            </Provider>
        );
    }
}

const layout = ES.create({
    container: {
        flex: 1,
        backgroundColor: '$colorEggplant'
    },
});