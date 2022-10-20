import { View, Text,Image , StyleProp, StyleSheet} from 'react-native'
import React from 'react'
import LoginForm from '../components/login/LoginForm'

const INSTAGRAM_LOGO=
'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png'
const LoginScreen = () => (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: INSTAGRAM_LOGO, height:100, width:100}}/>
      </View>
      <LoginForm/>
    </View>
  )

  const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:50,
        paddingHorizontal:12
    },
    logoContainer:{
        alignItems:'center',
        marginTop:60
    }
    })
export default LoginScreen