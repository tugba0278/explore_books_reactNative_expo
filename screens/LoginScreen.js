import { useNavigation } from '@react-navigation/core'
import React, {  useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth, db } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  const arr = [];

  const handleSignUp = () => {
    navigation.navigate("Register")
  }

  const handleLogin = async () => {

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);       
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          
          console.log("Document data:", data);
          console.log("data.Genre.length:", data.Genre.length);
          
          if(data.Genre.length === 0){
            navigation.replace("GenreSelection");
          } 
          else {
            navigation.replace("Home");
          }
        }
        else {
          console.log("No such document exists");
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View>
        <Text style={styles.title}>Hoşgeldiniz!</Text>
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.TextStyle}>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.TextInputStyle}
        />
        <Text style={styles.TextStyle}>Parola</Text>
        <TextInput
          placeholder="********"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.TextInputStyle}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Kaydol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

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
    alignItems: 'center',
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
    marginTop: 40
  },
  title:{
    fontSize: 40,
    fontWeight:'bold',
    color: 'white',
    margin: 40
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