import React from 'react';
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import GenreSelectionScreen from './screens/GenreSelectionScreen';
import BooksScreen from './screens/BooksScreen';
import LogoutScreen from './screens/LogOutScreen';
import AuthorListScreen from './screens/AuthorListScreen';
import HomeScreenDrawer from './screens/HomeScreenDrawer';
import AboutScreen from './screens/AboutScreen';
import RomanBooks from './screens/RomanBooks';
import PolisiyeBooks from './screens/PolisiyeBooks';


const Stack = createStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>

      <Stack.Navigator>      
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Login" 
          component={LoginScreen} />

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

        <Stack.Screen 
        name="GenreSelection" 
        component={GenreSelectionScreen}
        options={{
          title: 'Tür Seçimi',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />  

        <Stack.Screen 
        options={{ headerShown: false }}  
          name="Home" 
          component={HomeScreenDrawer} />

        <Stack.Screen    
          name="Books" 
          component={BooksScreen} />

        <Stack.Screen    
          name="Authors" 
          component={AuthorListScreen} />

        <Stack.Screen    
          name="About" 
          component={AboutScreen} />

        <Stack.Screen    
          name="LogOut" 
          component={LogoutScreen} />

        <Stack.Screen    
          name="Roman" 
          component={RomanBooks} />

        <Stack.Screen    
          name="Polisiye" 
          component={PolisiyeBooks} />


      </Stack.Navigator>    
    </NavigationContainer>
       
      
     
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },}
) 