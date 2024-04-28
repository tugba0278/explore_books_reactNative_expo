import React from "react";
import { Text, StyleSheet ,Image,ScrollView} from 'react-native';

const BooksDetailScreen = ({ route }) => {
    const { book } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: book.image }} style={styles.resim} />                 
            <Text style={styles.isim}>{book.isim}</Text>
            <Text style={styles.yazar}>Doğum Yeri: {book.yazar}</Text>
            <Text style={styles.basimYili}>Doğum Yılı: {book.basım_yılı}</Text>
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
    
});

export default BooksDetailScreen;
