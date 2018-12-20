import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

export default class SignupForm extends React.Component {
    state = { phone: '' };

    handleSubmit = async () => {
        root_url = 'https://us-central1-otpwithtwilio.cloudfunctions.net';
        try {
            await axios.post(`${url}/createUser`, { phone: this.state.phone });
            await axios.post(`${url}/requestOneTimePassword`, { phone: this.state.phone });
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
                <Button onPress={this.handleSubmit} title="Submit" />
            </View>
        );
    }
}

