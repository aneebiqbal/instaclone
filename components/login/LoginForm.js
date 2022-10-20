import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import  Validator  from 'email-validator'

const loginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('A email is srequired'),
    password: Yup.string().required().min(8, 'Passowrd must be 8 character long')
})

const LoginForm = ({}) => {
    return(    
   <View style={styles.wrapper}>
        <Formik
            initialValues={{email:'',password:''}}
            onSubmit={values => {
                console.log(values)
                console.log('your are logged in')
            }}
            validationSchema={loginFormSchema}
            validateOnMount={true}
        >
            {({handleBlur, handleChange, handleSubmit, values, errors, isValid})=>
                <>
                <View style={[styles.inputField,
                {
                    borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                    ? '#ccc' 
                    : 'red'
                }
                ]}>
                    <TextInput 
                        placeholderTextColor={'#444'}
                        placeholder='Phone Number, UserName or Email'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                </View>
                <View style={[styles.inputField,
                {
                    borderColor:
                    1 > values.password.length || values.password.length  > 6
                    ? '#ccc' 
                    : 'red'
                }
                ]}>
                    <TextInput 
                        placeholderTextColor={'#444'}
                        placeholder='Password'
                        autoCapitalize='none'
                        autoCorrect='none'
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                </View>
                <View style={{alignItems:'flex-end', marginBottom:30}}>
                    <TouchableOpacity>
                        <Text style={{color:'#6BB0F5'}}>Forget Passowrd?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Pressable 
                        titleSize={20} 
                        style={styles.button(isValid)} 
                        onPress={handleSubmit}
                        disabled={!isValid}
                    >
                        <Text style={styles.buttonText}>
                            Log In
                        </Text>
                    </Pressable>
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity>
                    <Text style={{color:'#6BB0F5' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                </>
            }
      </Formik>
    </View>
  )}

const styles = StyleSheet.create({
    inputField:{
        borderRadius:4,
        padding:12,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        borderWidth:1,
    },
    wrapper:{
        marginTop:80
    },
    button: isValid=>({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
        minHeight:42
    }),
    buttonText:{
        fontWeight:'600',
        color:'#fff',
        fontSize:20
    },
    signUpContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:50
    }
})
export default LoginForm