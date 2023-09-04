import { View, Text, Image,  StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/gym.png'
const SignInScreen = () => {
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.Logo}/>
    </View>
  )
}


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    Logo: {
        width: 150,
        height: 150 ,
    },
});
export default SignInScreen