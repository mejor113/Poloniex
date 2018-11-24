import React from 'react';
import {
    FlatList,
    View,
    ActivityIndicator
} from 'react-native';
import ES from 'react-native-extended-stylesheet';

import Row from './Row';
import Text from '../components/Text';


export default class Main extends React.Component {

    keyExtractor = item => `${item.id}`;

    renderHeader = () => {
        if (!this.props.isFetchRejected) return null;

        return (
            <View style={styles.errorBlock}>
                <Text>Error</Text>
            </View>
        );
    }

    renderItem = ({ item }) => (<Row item={item} />)

    render() {
        const { dataList, isFetching } = this.props;

        if (!dataList.length && isFetching) return (
            <ActivityIndicator
                color='#fff'
                size='large'
                style={styles.activityIndicator}
            />
        );

        return (
            <FlatList
                style={styles.scroll}
                contentContainerStyle={styles.container}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                ListHeaderComponent={this.renderHeader}
                data={dataList}
            />
        );
    }
}

const styles = ES.create({
    activityIndicator: {
        marginTop: '2rem'
    },
    scroll: {
        flex: 1,
        backgroundColor: '$colorPurple',
    },
    container: {
        paddingHorizontal: '0.7rem',
    },
    row: {
        flexDirection: 'row',
    },
    errorBlock: {
        marginHorizontal: '-0.7rem',
        padding: '0.3rem',
        alignItems: 'stretch',
        alignItems: 'center',
        backgroundColor: '#BF1223'
    },
});