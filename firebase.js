import { initializeApp } from 'firebase/app';
import { initializeAuth, onAuthStateChanged, getReactNativePersistence } from 'firebase/auth';

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



// Set persistence

  
export { auth };

