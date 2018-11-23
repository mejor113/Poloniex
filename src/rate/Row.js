import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import ES from 'react-native-extended-stylesheet';

import Text from '../components/Text';

export default class Row extends React.Component{
    renderLastChange = param => {
        const value = Math.round(param * 100) / 100;
        const isPositive = value > 0;
        const isSame = value === 0;

        return (
            <Text style={[styles.lastChangeText, isSame ? null : { color: isPositive ? '#51F35A' : '#BF1223' }]}>
                {value}
            </Text>
        )
    }

    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.mainRow}>
                    <Text style={styles.name}>
                        {item.name}
                    </Text>
                    {this.renderLastChange(item.percentChange)}
                </View>
                <View style={styles.scndRow}>
                    <View style={styles.scndRowItem}>
                        <Text>{item.highestBid}</Text>
                        <Text style={styles.bidDesc}>Top Bid</Text>
                    </View>
                    <View style={[styles.scndRowItem, styles.scndRowItemRight]}>
                        <Text>{item.last}</Text>
                        <Text style={styles.bidDesc}>Bid</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = ES.create({
    container: {
        flex: 1,
        padding: '0.7rem',
        marginVertical: '0.35rem',
        backgroundColor: '$colorEggplant',
        borderRadius: '0.25rem',
    },
    mainRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: '700',
        fontSize: '1.1rem'
    },
    lastChangeBlock: {
        alignSelf: 'flex-end',
    },
    lastChangeText: {
        fontSize: '1.1rem',
        fontWeight: '500'
    },
    scndRow: {
        flexDirection: 'row',
    },
    scndRowItem: {
        flex: 1,
        marginTop: '0.5rem',
    },
    bidDesc: {
        fontSize: '0.7rem',
        color: '$colorBrown'
    },
    scndRowItemRight: {
        alignItems: 'flex-end'
    }
})