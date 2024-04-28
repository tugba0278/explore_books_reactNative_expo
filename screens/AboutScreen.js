import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {

    return (
        <View>
            <Text style={styles.text}>Bu uygulama, kitapları çeşitli kategorilere göre listeler ve kullanıcılara farklı kategorilerdeki kitaplar arasında gezinme imkanı sunar. Ayrıca kullanıcılar kitaplara puan verebilir, yorumlar yazabilir ve favori kitaplarını belirleyebilir. Ne tür kitaplar okumak istediğinizi seçerek önerilen kitapları okurseverler görebilir.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 23,
        marginTop: 70,
        marginLeft: 40,
        textAlign: "justify",
        marginRight: 40,
        color:"#800000",
        fontWeight:"400",
        fontStyle:"italic"       
    }
});

export default AboutScreen;
