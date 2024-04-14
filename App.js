import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {StyleSheet} from 'react-native'

import RegisterScreen from './screens/RegisterScreen';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{
          title: 'Kayıt Sayfası',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },}
) 