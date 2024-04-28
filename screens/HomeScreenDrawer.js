import React , { useEffect, useState }from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Image, Text } from "react-native";
import HomeScreen from "./HomeScreen";
import AuthorListScreen from "./AuthorListScreen";
import BooksScreen from "./BooksScreen";
import AboutScreen from "./AboutScreen";
import LogoutScreen from "./LogOutScreen";
import GenreSelectionScreen from "./GenreSelectionScreen";
import { auth, db } from '../firebase';
import { getDoc, doc } from "firebase/firestore";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ username, ...props }) => (
  <DrawerContentScrollView {...props}>
    <Image
      source={require('../assets/account.png')}
      style={{ width: 100, height: 100, resizeMode: 'cover', marginStart:100, }}
    />
    {username && <Text style={{fontSize:25,marginBottom:40,textAlign:"center",color:"#800000"}}>{username}</Text>}
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

export default function HomeScreenDrawer() {
  const [username, setUserName] = useState('');

  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = async () => {
    try {
      const user = auth.currentUser;
      // Reference to the user's document in Firestore
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      const data = docSnap.data();
      setUserName(data.Name)
    } catch (error) {
      console.error("Hata:", error);
    }
  };
  
  return (    
    <Drawer.Navigator       
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 300,
          borderRadius: 10,
          marginTop: 60,
          marginBottom: 60,
        },
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerLabelStyle: {
          marginStart:15,
          color: "#111",
          fontSize: 20,
        },
        drawerActiveTintColor:"red"
      }}
      drawerContent={props => <CustomDrawerContent {...props} username={username} />} 
    >
      <Drawer.Screen
        name="HomeScreen"
        options={{
          drawerLabel: "Anasayfa",
          title: "Anasayfa",
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Books"
        options={{
          drawerLabel: "Kitap Türleri",
          title: "Kitap Türleri",
        }}
        component={BooksScreen}
      />
      <Drawer.Screen
        name="Author"
        options={{
          drawerLabel: "Yazar Listesi",
          title: "Yazarlar",
        }}
        component={AuthorListScreen}
      />
      <Drawer.Screen
        name="TurSecimi"
        options={{
          drawerLabel: "Kitap Tür Seçimi",
          title: "Kitap Tür Seçimi",
        }}
        component={GenreSelectionScreen}
      />
      <Drawer.Screen
        name="About"
        options={{
          drawerLabel: "Hakkımızda",
          title: "Hakkımızda",
        }}
        component={AboutScreen}
      />
      <Drawer.Screen
        name="Logout"
        options={{
          drawerLabel: "Çıkış Yap",
          title: "Çıkış Yap",
        }}
        component={LogoutScreen}
      />
    </Drawer.Navigator>   
  );
}
