/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView,StyleSheet,Text, } from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
     <SignUpScreen/>
     {/* <SignUpScreen/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
root: {
  flex:1,
  backgroundColor: '#F9FBFC' 
}
});

export default App;
