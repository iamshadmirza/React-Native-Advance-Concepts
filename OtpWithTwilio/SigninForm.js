import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

export default class SigninForm extends React.Component {
    state = { phone: '', code: '' };

    handleSubmit = async () => {
        root_url = 'https://us-central1-otpwithtwilio.cloudfunctions.net';
        try {
            const { phone, code } = this.state;
            let { data } = await axios.post(`${url}/verifyOneTimePassword`, { phone, code });
            firebase.auth().signInWithCustomToken(data.token);
        } catch (err) { console.log("error", err); }
    }

    render() {
        return (
            <View style={{ padding: 5 }}>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter phone number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter verification code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    />
                </View>
                <Button onPress={this.handleSubmit} title="Submit" />
            </View>
        );
    }
}

