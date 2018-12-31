import React from 'react';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../component/Slides';
import _ from 'lodash';

const SLIDE_DATA = [
    { text: 'Welcome to Job Finder!', color: '#03A9F4' },
    { text: 'Slide Slide Slide', color: '#03A9F2' },
    { text: 'Set your location then swipe away', color: '#009688' }
];

class WelcomeScreen extends React.Component {
    state = { token: null };
    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb-storage');
        if (token) {
            this.props.navigation.navigate('map');
            this.setState({ token });
        } else {
            this.setState({ token: false });
        }
    }
    onSlideComplete = () => {
        this.props.navigation.navigate('auth');
    }
    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading />;
        }
        return (
            <Slides
                data={SLIDE_DATA}
                onComplete={this.onSlideComplete}
            />
        );
    }
}

export default WelcomeScreen;