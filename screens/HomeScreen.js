import React, { useEffect, useState } from 'react';
import { View, Text,  StyleSheet,TouchableOpacity } from 'react-native';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';


const HomeScreen = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = async () => {
    try {
      const user = auth.currentUser;
      // Reference to the user's document in Firestore
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      const data = docSnap.data();
      setUserName(data.Name)
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <View style={[styles.contanier]}>
      <Text style={{color:'white',fontSize:30,bottom:30}}>Hoş geldiniz, {userName}!</Text>

      <TouchableOpacity
        onPress={() => {

        }}
        style={ [styles.buttonStyle]}      
      >
          <Text style={[styles.textStyle]}>YENİ EKLENENLER</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {}}
        style={ [styles.buttonStyle]}      
      >
          <Text style={[styles.textStyle]}>ÇOK OKUNANLAR</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        onPress={() => {}}
        style={ [styles.buttonStyle]}      
      >
          <Text style={[styles.textStyle]}>ÖNERİLENLER</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {}}
        style={ [styles.buttonStyle]}      
      >
          <Text style={[styles.textStyle]}>FAVORİLER</Text>
      </TouchableOpacity>

    </View>
  );
  
};

export default HomeScreen;

const styles=  StyleSheet.create({
  contanier:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:'black'},

  buttonStyle:{
    backgroundColor: 'white',
    width: 300,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20
  },

  textStyle:{
    color: 'black', 
    fontSize: 20, 
    fontWeight: 'bold'
  },
  menuText: {
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold'
  }

})