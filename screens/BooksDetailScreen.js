import React, { useState } from "react";
import { Text, StyleSheet ,Image,ScrollView,TextInput,TouchableOpacity, Alert} from 'react-native';
import { db ,auth} from "../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

const BooksDetailScreen = ({ route }) => {
    const { book } = route.params;
    const [comment, setComment] = useState('');

    const handleComment =async()=>{
        
        const user = auth.currentUser;

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();

        console.log(data);
        console.log(data.Name);
        console.log(book.isim);

        setDoc(doc(db, "books_comment", user.uid), {
            Comment: comment,
            OwnerId: data.OwnerId,
            Name: data.Name,
            Book_Name: book.isim,
        })
        
        setComment("");
        Alert.alert("Yorum Gönderildi", "Yorumunuz başarıyla gönderildi.");

    };

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: book.image }} style={styles.resim} />                 
            <Text style={styles.isim}>{book.isim}</Text>
            <Text style={styles.yazar}>Yazar:  {book.yazar}</Text>
            <Text style={styles.basimYili}>Basım Yılı:  {book.basım_yılı}</Text>
            <TextInput
                style={styles.yorumInput}
                onChangeText={text => setComment(text)}
                value={comment}
                placeholder="Yorumunuzu buraya yazın..."
                multiline
            />

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={handleComment}
            >
                <Text style={styles.buttonText}>Yorum Yap</Text>
            </TouchableOpacity>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6DAC8',
        padding: 20,
    },
    resim: {
        width: '100%',
        height: 300,
        marginBottom: 10,
        borderRadius: 8,
        resizeMode:"contain"
    },
    isim: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    yazar: {
        fontSize: 18,
        marginBottom: 5,
    },
    basimYili: {
        fontSize: 18,
        marginBottom: 5,
    },
    yorumInput: {
        height: 120,
        width:300,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        marginTop: 50,
        alignItems: 'center',
        textAlign:"center",
        marginStart:35
    },
    buttonStyle:{
        backgroundColor: '#800000',
        width: '40%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginStart:120,
        marginTop:20
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
      },   
});

export default BooksDetailScreen;
