import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost=({navigation}) =>(
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <FormikPostUploader navigation={navigation}/>
    </View>
)

const Header = ({navigation}) => {
  return (
    <View style={styles.headContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}} 
                style={{width:30, height:30}}/>
        </TouchableOpacity>
            <Text style={styles.headerText}>New Post</Text>
            <Text></Text>
       
    </View>
  )
}
const styles = StyleSheet.create({
    headContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    container:{
        marginHorizontal:10,
    },
    headerText:{
        color:'#fff',
        fontWeight:'700',
        fontSize:20,
        marginRight:25

    }
    
})
export default AddNewPost