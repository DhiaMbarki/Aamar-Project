import { View, Text,  StyleSheet , ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import {useNavigation} from '@react-navigation/native'


const ConfirmEmailScreen = () => {

  const [code, setCode ] = useState('')


  const navigation = useNavigation();


  const onConfirmPressedPressed = () => {
    navigation.navigate('Home')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

 
  const onResendPress = () => {
    console.warn ('onResendPress')
  }

  return (
    <ScrollView>
    <View style={styles.root}>
     <Text style={styles.title}> Confirm your email </Text>

      <CustomInput placeholder="Enter your confiramtion code" value={code} setValue={setCode}/>
    
      <CustomButton text ="Confirm" onPress={onConfirmPressedPressed} />

 
        

      <CustomButton text ="Resond Code" onPress={onResendPress} type="TERTIARY"/>


     <CustomButton text ="Back to Sign in" onPress={onSignInPress} type="SECONDARY"/>

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
export default ConfirmEmailScreen