import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const NovoScreen = () => {

  const navigation = useNavigation()
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        
      </View>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
      onPress={handleSignOut}
      style={styles.button}
      >
      <Text style={styles.buttonText}>Deslogar</Text>
      </TouchableOpacity>

    </View>
  )
}


export default NovoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navar:{
    color: 'blue',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})