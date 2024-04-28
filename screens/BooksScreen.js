import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text,TouchableOpacity, StyleSheet } from 'react-native';

const BooksScreen=()=>{

    const navigation =useNavigation();
    return(
        <View style={styles.container}>

        <Text style={[styles.title]}>Merak Ettiğiniz Kitap Türünü Seçiniz</Text>

            <View style={styles.row}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Roman")}
                style={[styles.button]}
                >
                <Text style={[styles.buttonText]}>Roman</Text>
                </TouchableOpacity>

            <View style={{ marginLeft: 20 }} />

                <TouchableOpacity
                onPress={() => navigation.navigate("Polisiye")}
                style={[styles.button]}
                >
                <Text style={[styles.buttonText]}>Polisiye</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Siir")}
                style={[styles.button]}
                >
                <Text style={[styles.buttonText]}>Şiir</Text>
                </TouchableOpacity>

            <View style={{ marginLeft: 20 }} />

                <TouchableOpacity
                onPress={() => navigation.navigate("Cocuk")}
                style={[styles.button]}
                >
                <Text style={[styles.buttonText]}>Çocuk</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Dini")}
                style={[styles.button]}
                >
                <Text style={[styles.buttonText]}>Dini</Text>
                </TouchableOpacity>

            <View style={{ marginLeft: 20 }} />

                <TouchableOpacity
                onPress={() => navigation.navigate("Hikaye")}
                style={[styles.button]}
                >
                <Text style={[styles.buttonText]}>Hikaye</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Psikoloji")}
                style={[styles.button]}
                >
                <Text style={[styles.buttonText]}>Psikoloji</Text>
                </TouchableOpacity>

            <View style={{ marginLeft: 20 }} />

                <TouchableOpacity
                onPress={() => navigation.navigate("Gelisim")}
                style={[styles.button]}
                >
                <Text style={[styles.buttonText]}>K.Gelişim</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Tarih")}
                style={[styles.button]}
                >
                <Text style={[styles.buttonText]}>Tarih</Text>
                </TouchableOpacity>

            <View style={{ marginLeft: 20 }} />

                <TouchableOpacity
                onPress={() => navigation.navigate("Saglık")}
                style={[styles.button]}
                >
                <Text style={[styles.buttonText]}>Sağlık</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BooksScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    row: {
        flexDirection: 'row',
        marginBottom:20,
        
    },

    button:{
    backgroundColor: '#DCFFB7',
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10 ,
    borderWidth:2,
    borderColor:"#3A4D39",
    },

    buttonText:{
        color: 'black', 
        fontSize: 17, 
        fontWeight: 'bold'
    },

    title:{
        fontSize:23,
        fontWeight:"400",
        color:"#3A4D39",
        marginBottom:50,
        textShadowRadius:3,
        shadowColor:"black"
    }
})