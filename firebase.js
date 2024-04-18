// import { initializeApp } from 'firebase/app';
// import { initializeAuth, getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// // Firebase yapılandırması
// const firebaseConfig = {
//   apiKey: "AIzaSyD4j60vnVcIPFRDguiKOmWWMOvxDy7VA_0",
//   authDomain: "expoexplorebooks.firebaseapp.com",
//   projectId: "expoexplorebooks",
//   storageBucket: "expoexplorebooks.appspot.com",
//   messagingSenderId: "1095731174681",
//   appId: "1:1095731174681:web:3e71b54c5f4404f65ff988"
// };

// // Firebase başlatma
// const app = initializeApp(firebaseConfig);

// // Auth nesnesini başlatma
// const auth = getAuth(app);
// initializeAuth(auth, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// // Firestore nesnesini başlatma
// const firestore = getFirestore(app);

// // Firestore'da kullanıcının belirtilen kitap türlerini güncelleme işlevi
// const updateUserGenres = async (userId, selectedGenres) => {
//   try {
//     await firestore.collection('users').doc(userId).update({
//       'genre-selection': selectedGenres
//     });
//   } catch (error) {
//     console.error("Hata:", error);
//   }
// };

// export { auth, firestore, updateUserGenres };


import { initializeApp } from 'firebase/app';
import { initializeAuth, onAuthStateChanged, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyD4j60vnVcIPFRDguiKOmWWMOvxDy7VA_0",
    authDomain: "expoexplorebooks.firebaseapp.com",
    projectId: "expoexplorebooks",
    storageBucket: "expoexplorebooks.appspot.com",
    messagingSenderId: "1095731174681",
    appId: "1:1095731174681:web:3e71b54c5f4404f65ff988"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export { auth ,db};










