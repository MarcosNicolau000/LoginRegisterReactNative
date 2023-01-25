import { Dimensions, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import Svg, {Image} from 'react-native-svg'


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation()
  
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
        if (user) {
            navigation.replace("Nav")
        }
    })
    return unsubscribe
  })
  const handleLogin = () => {
    auth
        .signInWithEmailAndPassword(email, senha)
        .then(userCredentials => {
            const user = userCredentials.user;
            
        })
        .catch(error => alert(error.message))
  }
  const {height, width} = Dimensions.get('window')
  return (
    
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
    <View style={StyleSheet.absoluteFill}>
        <Svg height={height} width={width}>
            <Image href={require('../images/gradient.png')} width={width} height={height} preserveAspectRatio="xMidYMid slice"/>
        </Svg>
    </View>
    <View style={styles.logoStyle}>
        <Svg height={160} width={160}>
            <Image href={require('../images/logo.png')} width={160} height={160} />
        </Svg>
    </View>
      <View style={styles.inputContainer}>
        <TextInput
        
            placeholder="Email"
            placeholderTextColor={"black"}
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
        />
        <TextInput
            placeholder='Senha'
            placeholderTextColor={"black"}
            Value={senha}    
            onChangeText={text => setSenha(text)}
            style={styles.input}
            secureTextEntry
        />

      </View>

      <View style= {styles.buttonContainer}>
        <TouchableOpacity 
        onPress={handleLogin}
        style={styles.button}
        >
            <Text style={styles.buttonText} >Login</Text>
        </TouchableOpacity>
        
      </View>
      
    </KeyboardAvoidingView>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoStyle:{
        marginBottom: 70
    },
    imageView:{
        width: '20%',
        height: '20%',
    },
    
    inputContainer:{
        shadowOffset: {width: 0, height:4},
        shadowOpacity: '0.25',
        shadowRadius: '4',
        width: '80%',
    },
    input:{
        backgroundColor: '#D9D9D9',
        borderRadius: '10px',
        
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginTop:5,

        borderColor: '#000000',
        borderWidth: '1px',

        shadowOffset: {width: 0, height:4},
        shadowOpacity: '0.2',
        shadowColor: '#000000',
        shadowRadius: '4',
    },
    buttonContainer:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20,
    },
    button:{
        backgroundColor: '#21283A',
        width: '100%',
        padding: 15,
        
        paddingVertical: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    
    
})