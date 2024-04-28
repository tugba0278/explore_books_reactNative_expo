import { useEffect } from "react";
import {  Alert } from 'react-native';
import { auth } from '../firebase';

const LogoutScreen = ({ navigation }) => {
    useEffect(() => {
        const handleLogout = () => {
            Alert.alert(
                "Çıkış Yap",
                "Çıkış yapmak istediğinize emin misiniz?",
                [
                    {
                        text: "İptal",
                        style: "cancel",
                        onPress: () => {
                            
                                navigation.replace("Home")
                            
                        } 
                    },
                    { 
                        text: "Evet", 
                        onPress: () => {
                            auth.signOut().then(() => {
                                console.log('Çıkış yapıldı.');
                                // Doğrudan Login ekranına yönlendirme
                                navigation.replace("Login")
                            }).catch((error) => {
                                console.error('Çıkış yaparken hata oluştu:', error);
                            });
                        } 
                    }
                ]
            );
        };
        
        handleLogout(); // Doğrudan logout işlemini çağır
    }, [navigation]);

    // Burada return null yaparak ekrana herhangi bir şey render etmiyoruz, çünkü alert dialog gösteriliyor.
    return null;
}

export default LogoutScreen;
