import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Router from './Router';
import { Notifications } from 'expo';
import store from './store';
import { Provider } from 'react-redux';
import registerForNotification from './services/push_notifications';

export default class App extends React.Component {
  componentDidMount() {
    registerForNotification();
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;
      if (origin === 'received' && text) {
        Alert.alert(
          'NEW PUSH NOTIFICATION',
          text,
          [
            { text: 'OK' }
          ]
        );
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
