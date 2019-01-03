import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title="Reset Liked Jobs"
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor='#f44336'
                    onPress={this.props.clearLikedJobs}
                />

            </View>
        );
    }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);