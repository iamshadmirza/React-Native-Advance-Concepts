import React from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapScreen extends React.Component {
    state = {
        region: {
            latitude: 37,
            longitude: -122,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
        },
        mapLoaded: false
    }
    componentDidMount() {
        this.setState({ mapLoaded: true });
    }
    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }
    onButtonPress = () => {
        this.props.fetchJobs(this.state.region);
    }
    render() {
        if (this.state.mapLoaded) {
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size='large' />
            </View>
        }
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.buttonContainer}>
                    <Button title='GET JOBS NEAR ME' onPress={this.onButtonPress} />
                </View>
            </View>
        );
    }
}
const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 5,
        right: 5,
        padding: 10
    },
}

export default connect(null, actions)(MapScreen);