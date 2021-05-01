import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './pages/Login';
import MenuPage from './pages/MenuPage';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuPage">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login', //Set Header Title
            headerStyle: {
              backgroundColor: '#533549', //Set Header color
            }
          }}
          
        />
        <Stack.Screen
          name="MenuPage"
          component={MenuPage}
          options={{
            title: 'Menu', //Set Header Title
            headerStyle: {
              backgroundColor: '#533549', //Set Header color
            }
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
