import React from "react";
import { Text, StyleSheet ,Image,ScrollView} from 'react-native';

const AuthorDetailScreen = ({ route }) => {
    const { author } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: author.image }} style={styles.resim} />                 
            <Text style={styles.isim}>{author.isim}</Text>
            <Text style={styles.dogumYeri}>Doğum Yeri:  {author.dogum_yeri}</Text>
            <Text style={styles.dogumYili}>Doğum Yılı:  {author.dogum_yılı}</Text>
            <Text style={styles.bio}>{author.bio}</Text>
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
    dogumYeri: {
        fontSize: 18,
        marginBottom: 5,
    },
    dogumYili: {
        fontSize: 18,
        marginBottom: 5,
    },
    bio:{
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 10,
        textAlign:"justify",
        marginTop:20
    }
});

export default AuthorDetailScreen;
