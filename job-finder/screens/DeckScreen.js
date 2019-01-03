import React from 'react';
import { Text, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import * as actions from '../actions';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../component/Swipe';

class DeckScreen extends React.Component {
    static navigationOptions = {
        title: 'Jobs',
        tabBar: {
            icon: ({ tintColor }) => {
                return <Icon name='description' size={30} color={tintColor} />;
            }
        }
    }
    renderCard(job) {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }
        return (
            <Card title={job.jobtitle}>
                <View style={{ height: 300 }}>
                    <MapView scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={Platform.OS === 'android'}
                        initialRegion={initialRegion}
                    >

                    </MapView>
                </View>
                <View style={styles.details}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
                </Text>
            </Card>
        );
    }
    renderNoMoreCards = () => {
        return (
            <Card title="NO MORE CARDS">
                <Button
                    title="BACK TO MAP"
                    large
                    icon={{ name: 'my-location' }}
                    backgroundColor='#03a9f4'
                    onPress={() => this.props.navigation.navigate('map')}
                />
            </Card>
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    keyProp="jobKey"
                    onSwipeRight={job => this.props.likeJobs(job)}
                    onSwipeLeft={}
                />
            </View>
        );
    }
}

const styles = {
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
}

function mapStateTopProps({ jobs }) {
    return {
        jobs: jobs.results
    };
}

export default connect(mapStateTopProps, actions)(DeckScreen);