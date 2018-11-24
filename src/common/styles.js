import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const windowWidth = Dimensions.get('window').width;

const styles = {
    $rem: Math.round(windowWidth * 0.046875), // 15

    $colorPurple: '#423c6d',
    $colorEggplant: '#7a839e',
    $colorBlue: '#94b5c2',
    $colorBrown: '#eadcc1',
    $colorYellow: '#fef5d8',
};

EStyleSheet.build(styles);

export default styles;
