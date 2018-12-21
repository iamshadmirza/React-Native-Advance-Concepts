import React from 'react';
import { Text, ScrollView, View, Dimensions, Button } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends React.Component {
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <Button
                    title="Onwards!!"
                    onPress={this.props.onComplete}
                />
            );
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View key={index} style={[styles.slide, { backgroundColor: slide.color }]}>
                    <Text style={styles.text}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }
    render() {
        return (
            <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    text: {
        fontSize: 30,
        color: 'white'
    },
    slide: {
        flex: 1,
        padding: 10,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default Slides;