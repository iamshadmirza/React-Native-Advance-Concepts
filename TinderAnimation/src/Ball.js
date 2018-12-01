import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export default class Ball extends React.Component {
    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0);
        Animated.spring(this.position, {
            toValue: { x: 250, y: 500 }
        }).start();
    }
    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball} />
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    ball: {
        backgroundColor: '#000',
        width: 60,
        height: 60,
        borderRadius: 30,
        elevation: 3
    },
});
