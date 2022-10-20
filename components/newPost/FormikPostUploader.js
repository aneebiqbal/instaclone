import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react' 
import * as Yup from 'yup'
import { Formik, yupToFormErrors } from 'formik'
import { Divider } from 'react-native-elements'

const PLACEHOLDER_IMG='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HDRAHBxMNBwcHDRIHBwcHDRsICRAWGB0YFiAdHx8YHTQsJCYxJxgfLTotMTUvOj86IyszRD84Qyk5NisBCgoKDQ0NGw8PFSsZFR0sKysrKzctLSstKysrKysrKysrNy0tKysrKysrKysrKysrKysrKystKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAZAAEBAAMBAAAAAAAAAAAAAAAAAQIDBAf/xAAmEAEAAgICAQEJAQAAAAAAAAAAAQIxcQMEERIFEyEyQVFhcoEj/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9VpiNQqUxGoVpgAFAAAAAAAAAAAAAAAAAAAAAAAAAASmI1CpTEahRAAUAAAAAAAAAAAAAAAAAAAAAAAAABKYjUKlMRqFEABQAAAAAAAAAAAAAAAAAAAAAAAAAEpiNQqUxGoUQAFAAAAAAAAAAAAAAAAAAAAAAAAVFQEpiNQqUxGoUQAFAAAAAAAAAAAAAAAAAAAAAAAAAASmI1CpTEahRAAUAAAAAAAAAAAAAAAAAAAAAAAAABKYjUKlMRqFEABQAAAAAAAAGHPe1KTbiivJyxH+XHyX91W1vpHnx8AZjg9ld/k7Me473HPR9ocXFx9jscHqjk45i/mPNZifvWY8fj+z3iAAoAAAAAAAAAAACUxGoVKYjUKIACgAAAAAAADT2+tTucc9fn8zx39NvNZml4mJ9UTExiYmImJbgHL0+jXqzbl9XJ2exzxWnL2e1aL8sxXz4j4REREeZxH1l1AAAAAAAAAAAAAAKgJTEahUpiNQogAKAAAAAAAAAAAAAAAAAAAAAAAAqACUxGoVKYjUKIACgAAAAAAAAAAAAAAAAAAAAAAAAAJTEahUpiNQogAKAAAAAAAAAAAAAAAAAAAAAAAAAAlMRqFSmI1CiAAoAAAAAAAAAAAAAAAAAAAAAAAAACUxGoVKYjUKIACgAAAAAAAAAAAAAAAAAAAAAAAKioCUxGoVKYjUKIACgAAAAAAAAAAAAAAAAAAAAAAAAAMafLH6wyQEUQFUQBRAFEAUAAAAQBRAFEAUQBRAFEAUQAAB/9k='

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A url is srequired'),
    caption: Yup.string().max(2200, 'Caption has reached its max length')
})

const FormikPostUploader = ({navigation}) => {
    const [thumbnilUrl ,setThumbnilUrl] = useState(PLACEHOLDER_IMG)
  return (
    <Formik
        initialValues={{caption:'',imageUrl:''}}
        onSubmit={values => {
            console.log(values)
            console.log('your post has been submitted successfully.')
            navigation.goBack()
        }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
        {({handleBlur, handleChange, handleSubmit, values, errors, isValid})=>
            <> 
                <View style={{margin:20, justifyContent:'space-between', flexDirection:'row'}}>
                    <Image source={{uri: thumbnilUrl ? thumbnilUrl : PLACEHOLDER_IMG}}
                           style={{width:100, height:100}}
                    
                    />
                    <View style={{flex:1, marginLeft:12}}>
                        <TextInput 
                            style={{color:'white', fontSize:20}}
                            placeholder='write a caption' 
                            placeholderTextColor={'gray'}
                            multiline={true} 
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={values.caption}
                        />
                    </View>
                </View>
                <Divider width={0.2} orientation='vertical'/>
                    <TextInput 
                            onChange={e => setThumbnilUrl(e.nativeEvent.text)}
                            style={{color:'white', fontSize:17}}
                            placeholder='Enter Image Url' 
                            placeholderTextColor={'gray'} 
                            onChangeText={handleChange('imageUrl')}
                            onBlur={handleBlur('imageUrl')}
                            value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{fontSize:10, color:'red'}}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button 
                        onPress={handleSubmit}
                        title='Share' 
                        disabled={!isValid}
                        />

            </>
        }
    </Formik>
    )
}

export default FormikPostUploader