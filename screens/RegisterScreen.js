import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { StyleSheet, Text,TextInput, View,TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedGenres] = useState([]);

  const navigation = useNavigation()

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        const userId = user.uid;
        console.log('Registered with:', user.email);
        // Add a new document in collection "cities"
      setDoc(doc(db, "users", user.uid), {
        Name: username,
        Phone: phone,
        Email: email,
        OwnerId:userId,
        Genre:selectedGenres,
      })
      .then(()=>alert("Account created successfully"))
        navigation.replace("Login");
      })
      .catch(error => {
        alert(error.message)
      })
  }
  return (
    <View style={styles.container}>

      <View style={styles.InputContainer}>
        <Text style={styles.TextStyle}>Ad Soyad</Text>
        <TextInput style={styles.TextInputStyle} onChangeText={text => setUserName(text)}placeholder='Ör: Tuğba OĞUZ'></TextInput>
          
        <Text style={styles.TextStyle}>Telefon Numarası </Text>
        <TextInput style={styles.TextInputStyle}onChangeText={text => setPhone(text)} placeholder='05XX XXX XX XX'></TextInput>      
            
        <Text style={styles.TextStyle}>E-mail</Text>
        <TextInput value={email} style={styles.TextInputStyle} onChangeText={text => setEmail(text)} placeholder='Ör: tugbaoguz@test.com' ></TextInput>    
           
        <Text style={styles.TextStyle}>Parola</Text>
        <TextInput placeholder="123***"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.TextInputStyle}
          secureTextEntry
          ></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Kaydol</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  InputContainer: {
    flexDirection: 'col',
    justifyContent: 'space-between',
  },
  TextInputStyle: {
    backgroundColor: 'white',
    marginTop: '8',
    width: 300,
    height: 45,
    padding: 10,
    borderRadius: 10,
  },
  TextStyle: {
    fontSize: 20,
    color: 'white',
    marginTop: 30
  },
  
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  button: {
    backgroundColor: '#800000',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: '#800000',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  buttonOutlineText: {
    color: '#800000',
    fontWeight: '700',
    fontSize: 20,
  },
})