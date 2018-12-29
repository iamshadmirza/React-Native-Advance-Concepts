import React from 'react';
import { StyleSheet, View } from 'react-native';
import Router from './Router';
import store from './store';
import { Provider } from 'react-redux';

export default class App extends React.Component {

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
