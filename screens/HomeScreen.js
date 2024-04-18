import { useNavigation } from '@react-navigation/core'
import React, {  useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


const HomeScreen = () => {
  
  return (
    <View>
        <Text>welcome to homepage</Text>
    </View>
      
  )
}
export default HomeScreen

