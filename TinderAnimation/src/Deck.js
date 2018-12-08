import React from 'react';
import { StyleSheet, View, Animated, PanResponder } from 'react-native';

export default class Deck extends React.Component {
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });

            },
            onPanResponderRelease: () => {

            }
        });
        this.state = { panResponder, position };
    }
    getCardStyle() {
        return {
            ...this.state.position.getLayout(),
            transform: [{ rotate: '35deg' }]
        };
    }
    renderCards() {
        return this.props.data.map((item, index) => {
            if (index === 0) {
                return (
                    <Animated.View
                        key={item.id}
                        {...this.state.panResponder.panHandlers}
                        style={this.getCardStyle()}>
                        {this.props.renderCard(item)}
                    </Animated.View>
                );
            }
            return this.props.renderCard(item);
        });
    }
    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
