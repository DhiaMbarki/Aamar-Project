import { View, Text,  StyleSheet , ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const SignUpScreen = () => {
  const [username, setUsername ] = useState('')
  const [email, setEmail ] = useState('')

  const [passowrd, setPassword ] = useState('')
  const [passowrdRepeat, setPasswordRepeat ] = useState('')


  const onRegisterPressed = () => {
    console.warn("onRegisterPressed")
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

  const onSignUpPress = () => {
    console.warn ('onSignUpPress')
  }

  const onTermOfUsePressed = () => {
    console.warn ('onTermOfUsePressed')
  }

  const onPrivacyPressed = () => {
    console.warn ('onPrivacyPressed')
  }

  return (
    <ScrollView>
    <View style={styles.root}>
     <Text style={styles.title}> Create an account</Text>

      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustomInput placeholder="Email" value={email} setValue={setEmail}/>

      <CustomInput placeholder="Passowrd" value={passowrd} setValue={setPassword} 
      secureTextEntry
      />
       <CustomInput placeholder="Repeat Passowrd" value={passowrdRepeat} setValue={setPasswordRepeat} 
      secureTextEntry
      />


      <CustomButton text ="Register" onPress={onRegisterPressed} />

 
        <Text style={styles.text}>
        By registerng, you confirm that you accept our {' '} 
        <Text style={styles.link} onPress={onTermOfUsePressed}>terms of Use </Text> and {' '}
        <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
        </Text>
      <CustomButton text ="Sign with Facebook" onPress={onSignInFacebook} 
      bgColor="#E7EAF4"
      fgColor="#4765A9"
      />
      <CustomButton text ="Sign with Google" onPress={onSignInGoogle}
      bgColor="#FAE9EA"
      fgColor="#DD4D44"
      />
      <CustomButton text ="Sign In with Apple" onPress={onSignInApple}
      bgColor="#e3e3e3"
      fgColor="#363636"

      />

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
   
  title : {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },

  text :{
    color: 'gray',
    marginVertical:10,
  },
  link: {
    color: '#FDB075'
  }

});
export default SignUpScreen