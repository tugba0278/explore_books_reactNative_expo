import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const AuthorListScreen = () => {
    const [yazarlar, setyazarlar] = useState([]);

    useEffect(() => {
        veriGetir();
    }, []);

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

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {yazarlar.map((yazar, index) => (
                <View style={styles.yazarContainer} key={index}>
                    <Image source={{ uri: yazar.image }} style={styles.resim} />                 
                    <Text style={styles.isim}>{yazar.isim}</Text>
                    <Text style={styles.dogumYeri}>{yazar.dogum_yeri}</Text>
                    <Text style={styles.dogumYili}>{yazar.dogum_yılı}</Text>
                </View>
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
