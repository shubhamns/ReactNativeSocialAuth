import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  NativeModules,
  TouchableOpacity,
} from 'react-native';

const {RNTwitterSignIn} = NativeModules;

const Constants = {
  TWITTER_COMSUMER_KEY: '',
  TWITTER_CONSUMER_SECRET: '',
};

export default function TwitterAuth(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function _signIn() {
    RNTwitterSignIn.init(
      Constants.TWITTER_COMSUMER_KEY,
      Constants.TWITTER_CONSUMER_SECRET,
    );
    RNTwitterSignIn.logIn()
      .then(loginData => {
        console.log(loginData);
        const {authToken, authTokenSecret} = loginData;
        if (authToken && authTokenSecret) {
          setIsLoggedIn(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  function _signOut() {
    console.log('logout');
    RNTwitterSignIn.logOut();
    setIsLoggedIn(false);
  }

  return (
    <View style={[props.style, {margin: 2}]}>
      {isLoggedIn ? (
        <TouchableOpacity style={styles.button} onPress={() => _signOut()}>
          <Text style={styles.buttonLabel}>Logout</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => _signIn()}>
          <Text style={styles.buttonLabel}>Login with Twitter</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00acee',
    borderRadius: 5,
    width: 190,
    height: 32,
  },
  buttonLabel: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
  },
});
