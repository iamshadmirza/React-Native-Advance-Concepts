import React from 'react';
import { Text, View, TouchableOpacity, Platform, ScrollView, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';

class ReviewScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Review jobs',
        headerRight: (<TouchableOpacity onPress={() => navigation.navigate('settings')}>
            <MaterialIcons name='settings' size={28} style={{ paddingRight: 5 }} />
        </TouchableOpacity>),
        headerStyle: {
            marginTop: Platform.OS === 'android' ? 0 : 24
        }
    });
    renderLikedJobs() {
        return this.props.likedJobs.map(job => {
            const { company, formattedRelativeTime, url } = jobs;
            return (
                <Card>
                    <View style={{ height: 200 }}>
                        <View style={styles.details}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                    </View>
                    <Button
                        title='Apply Now'
                        backgroundColor='#03a9f4'
                        onPress={() => Linking.openURL(url)}
                    />
                </Card>
            );
        });
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}

const styles = {
    details: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics: {
        fontStyle: 'italic'
    }
};

function mapStateToProps(state) {
    return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps, {})(ReviewScreen);