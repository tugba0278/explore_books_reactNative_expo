import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { auth, db } from '../firebase'; // Firebase bağlantısı
import { useNavigation } from '@react-navigation/native';
import firestore, { collection, doc, setDoc, getDoc } from 'firebase/firestore';


const GenreSelectionScreen = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const navigation = useNavigation();
  const groupedGenres = [
    ['ROMAN', 'POLİSİYE'],
    ['ŞİİR', 'ÇOCUK'],
    ['DİNİ', 'HİKAYE'],
    ['PSİKOLOJİ', 'K.GELİŞİM'],
    ['TARİH', 'SAĞLIK']
  ];

  const toggleGenreSelection = (genre) => {
    const updatedGenres = [...selectedGenres];
    const genreIndex = updatedGenres.indexOf(genre.toLowerCase());
    if (genreIndex !== -1) {
      updatedGenres.splice(genreIndex, 1);
    } else {
      updatedGenres.push(genre.toLowerCase());
    }
    setSelectedGenres(updatedGenres);
  };
  
  const saveSelectedGenres = async () => {
    try {
      console.log("In GenreSelection");
      const user = auth.currentUser;
      if (user) {
        // Reference to the user's document in Firestore
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists) {
          const data = docSnap.data();
          console.log("Document data:", data);

          setDoc(docRef, {
              ...data,
              Genre:selectedGenres,
            })
            .catch(error => {
              alert(error.message)
            });
        }
        else {
          console.log("No such document exists");
        }

        navigation.replace("Home");
      } else {
        console.log("Kullanıcı oturumu bulunamadı.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', backgroundColor: 'black' }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginLeft: 40 }}>NE TÜR KİTAPLARDAN HOŞLANIRSINIZ?</Text>
      <View style={{ height: 40 }} />

      {groupedGenres.map((genreGroup, index) => (
        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          {genreGroup.map((genre) => (
            <TouchableOpacity
              key={genre}
              onPress={() => toggleGenreSelection(genre)}
              style={{
                backgroundColor: selectedGenres.includes(genre.toLowerCase()) ? '#800000' : 'white',
                width: 150,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginVertical: 10
              }}
            >
              <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>{genre}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <TouchableOpacity
        onPress={saveSelectedGenres}
        style={{
          backgroundColor: '#800000',
          width: 80,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 80,
          right: 40,
          borderRadius: 10
        }}
      >
        <Text style={{ color: 'white', fontSize: 15 }}>İLERİ</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default GenreSelectionScreen;