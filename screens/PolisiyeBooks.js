import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const PolisiyeBooks = () => {
    const [kitaplar, setKitaplar] = useState([]);

    useEffect(() => {
        veriGetir();
    }, []);

    const veriGetir = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "polisiye"));
            const kitaplarData = [];
            querySnapshot.forEach((doc) => {
                // Her bir dokümanın verilerini alıp kitaplarData dizisine ekleyin
                kitaplarData.push(doc.data());
            });
            // kitaplar state'ini güncelleyin
            setKitaplar(kitaplarData);
            console.log("Tüm kitaplar:", kitaplarData);
        } catch (error) {
            console.error("Error getting documents: ", error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {kitaplar.map((kitap, index) => (
                <View style={styles.kitapContainer} key={index}>
                    <Image source={{ uri: kitap.image }} style={styles.resim} />
                    <Text style={styles.isim}>{kitap.isim}</Text>
                    <Text style={styles.yazar}>{kitap.yazar}</Text>
                    <Text style={styles.basimYili}>{kitap.basım_yılı}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

export default PolisiyeBooks;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor:"#D6DAC8"
    },
    kitapContainer: {
        width: '48%', // İki kitap her satırda yer alacak şekilde genişlik ayarı
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 10,
        padding: 10,
    },
    resim: {
        width: '80%',
        height: 200,
        marginBottom: 10,
        borderRadius: 8,
        marginStart:15
    },
    isim: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    yazar: {
        fontSize: 16,
        marginBottom: 5,
    },
    basimYili: {
        fontSize: 14,
        color: '#666',
    },
});
