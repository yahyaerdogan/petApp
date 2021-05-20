import 'react-native-gesture-handler';
import React, { Component } from 'react'

import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './pages/Login';
import MenuPage from './pages/MenuPage';
import ProfilePet from './pages/ProfilePet';
import AddPet from './pages/AddPet';

const Stack = createStackNavigator();

export default class App extends Component {

 

  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddPet">
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
        <Stack.Screen
          name="ProfilePet"
          component={ProfilePet}
          options={{
            title: 'ProfilePet', //Set Header Title
            headerStyle: {
              backgroundColor: '#533549', //Set Header color
            }
          }}
        />
         <Stack.Screen
          name="AddPet"
          component={AddPet}
          options={{
            title: 'AddPet', //Set Header Title
            headerStyle: {
              backgroundColor: '#533549', //Set Header color
            }
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

// export default App;
