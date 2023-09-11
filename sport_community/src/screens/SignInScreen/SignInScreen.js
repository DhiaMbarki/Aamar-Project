import { View, Text, Image,  StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/gym.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'
import {useNavigation} from '@react-navigation/native'


const SignInScreen = () => {
  const [username, setUsername ] = useState('')
  const [passowrd, setPassword ] = useState('')

  const {height} = useWindowDimensions();
  const navigation = useNavigation();


  const onSignInPressed = () => {
    console.warn("Sign in")
    // validate user

    navigation.navigate('Home')
  }

  const onForgotPasswordPressed = () => {
    console.warn("onForgotPasswordPressed")
    navigation.navigate("ForgotPassword")

  }


 
  const onSignUpPress = () => {
    console.warn ('onSignUpPress')
    navigation.navigate("SignUp")

  }

  return (
    <ScrollView>
    <View style={styles.root}>
      <Image source={Logo} 
      style={[styles.logo, {height: height * 0.3}]}
      resizeMode='contain'
      />

      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustomInput placeholder="Passowrd" value={passowrd} setValue={setPassword} 
      secureTextEntry={true}
      />
      <CustomButton text ="Sign In" onPress={onSignInPressed} />


      <CustomButton text ="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>

     <SocialSignInButtons/>

<CustomButton text ="Don't have an account? Create one" onPress={onSignUpPress} type="TERTIARY"/>

    </View>
    </ScrollView>
  )
}




const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
export default SignInScreen