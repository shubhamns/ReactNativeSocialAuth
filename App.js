import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import GoogleAuth from './screens/google';
import FacebookAuth from './screens/facebook';
import TwitterAuth from './screens/twitter';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <GoogleAuth />
        <FacebookAuth />
        <TwitterAuth />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
