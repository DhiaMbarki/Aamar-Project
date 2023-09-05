import { View, Text, Image,  StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/gym.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const SignInScreen = () => {
  const [username, setUsername ] = useState('')
  const [passowrd, setPassword ] = useState('')

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in")
  }

  const onForgotPasswordPressed = () => {
    console.warn("onForgotPasswordPressed")

  }

  const onSignInFacebook= () => {
    console.warn('onSignInFacebook')
  }
    const onSignInGoogle= () => {
    console.warn('onSignInGoogle')
  }
  const onSignInApple= () => {
    console.warn('onSignInApple')
  }

  return (
    <View style={styles.root}>
      <Image source={Logo} 
      style={[styles.logo, {height: height * 0.3}]}
      resizeMode='contain'
      />

      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustomInput placeholder="Passowrd" value={passowrd} setValue={setPassword} 
      secureTextEntry={true}
      />

      
      <CustomButton text ="Sign In" onPress={onSignInPressed}/>
      <CustomButton text ="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>

      <CustomButton text ="Sign with Facebook" onPress={onSignInFacebook}/>
      <CustomButton text ="Sign with Google" onPress={onSignInGoogle}/>
      <CustomButton text ="Sign In with Apple" onPress={onSignInApple}/>

    </View>
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