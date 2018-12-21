import React from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
    render() {
        return (
            <View>
                <Text>This is ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;