import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
//import { useNavigation } from '@react-navigation/native';

const AuthorListScreen = ({navigation}) => {
    const [yazarlar, setyazarlar] = useState([]);

    useEffect(() => {   
    const veriGetir = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "yazarlar"));
            const yazarlarData = [];
            querySnapshot.forEach((doc) => {
                // Her bir dokümanın verilerini alıp yazarlarData dizisine ekleyin
                yazarlarData.push(doc.data());
            });
            // yazarlar state'ini güncelleyin
            setyazarlar(yazarlarData);
            console.log("Tüm yazarlar:", yazarlarData);
            console.log("Resim URL'leri:", yazarlar.map((yazar) => yazar.image));

        } catch (error) {
            console.error("Error getting documents: ", error);
        }
    };

    veriGetir();
    }, []);

    const handleAuthorPress = (yazar) => {
        // Yazar detay sayfasına yönlendirme yap
        navigation.navigate('AuthorDetail', { author: yazar });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            {yazarlar.map((yazar, index) => (
                <TouchableOpacity 
                    style={styles.yazarContainer} 
                    onPress={() => handleAuthorPress(yazar)} // Yazar detayına tıklandığında işleyiciyi çağır
                    key={index}
                    >
                    <Image source={{ uri: yazar.image }} style={styles.resim} />                 
                    <Text style={styles.isim}>{yazar.isim}</Text>
                    <Text style={styles.dogumYeri}>{yazar.dogum_yeri}</Text>
                    <Text style={styles.dogumYili}>{yazar.dogum_yılı}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

export default AuthorListScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor:"#D6DAC8"
    },
    yazarContainer: {
        width: '48%', // İki yazar her satırda yer alacak şekilde genişlik ayarı
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 10,
        padding: 10,
    },
    resim: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 8,
        resizeMode:"contain"
    },
    isim: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dogumYeri: {
        fontSize: 16,
        marginBottom: 5,
    },
    dogumYili: {
        fontSize: 14,
        color: '#666',
    },
});
