import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Welcome from '../Welcome/Welcome';
import { colors } from '../../config/styles';
import Home from '../Home/Home';
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  const optionLogin = {
    title: 'Iniciar Sesion',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: 'bold',
  };

  const optionRegister = {
    title: 'Identificate',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: 'bold',
  };
  const optionHome = {
    headerShown: false,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: 'bold',
  };
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Welcome"
              component={Welcome}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={optionLogin}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={optionRegister}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} options={optionHome} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
