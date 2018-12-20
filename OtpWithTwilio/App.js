import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCmsR_CJV9RqY6v_JOrKrSwf504R0BnSvM",
      authDomain: "otpwithtwilio.firebaseapp.com",
      databaseURL: "https://otpwithtwilio.firebaseio.com",
      projectId: "otpwithtwilio",
      storageBucket: "otpwithtwilio.appspot.com",
      messagingSenderId: "318075339340"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignupForm />
        <SigninForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
