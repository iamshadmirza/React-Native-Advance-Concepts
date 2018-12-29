import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends React.Component {
    componentDidMount() {
        this.props.facebookLogin();
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>This is AuthScreen</Text>
            </View>
        );
    }
}

export default connect(null, actions)(AuthScreen);