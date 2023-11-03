import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuList from './componentes/Menu.jsx';
import LoginScreen from './componentes/Login.jsx'
import Detalles from './componentes/Detalles.jsx'
import {AuthProvider} from './context/AuthContext.js'
import {MenuProvider} from './context/MenuContext.js'



const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <MenuProvider>
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{
                headerShown: false,
              }}/>
        <Stack.Screen name="menu" component={MenuList} options={{
                headerShown: false,
              }}/>
        <Stack.Screen name="detalles" component={Detalles} /> 
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
    </MenuProvider>
  );
};

export default App;
