import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Cards, Button } from 'react-native-elements';
import Swipe from '../component/Swipe';

class DeckScreen extends React.Component {
    renderCard(job) {
        return (
            <Card title={job.jobtititle}>
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
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
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

export default connect(mapStateTopProps, {})(DeckScreen);