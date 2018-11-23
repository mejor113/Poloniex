import React from "react";
import { Text } from "react-native";
import ES from "react-native-extended-stylesheet";

export default class TextComponent extends React.Component {
    render() {
        return (
            <Text 
                {...this.props} 
                allowFontScaling={false}
                includeFontPadding={false} 
                style={[styles.text, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}

const styles = ES.create({
    text: {
        fontSize: '1rem',
        fontFamily: 'Roboto',
        color: '$colorYellow'
    }
})