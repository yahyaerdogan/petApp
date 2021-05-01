import * as React from 'react';
import { Button, View, Text,TextInput, Touchable, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useState } from "react";


const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.logo}>
    PetCare
    </Text>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="username" 
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({email:text})}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="password" 
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({password:text})}/>
    </View>
    <TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.loginBtn}
    onPress={() => navigation.navigate('MenuPage')}>
      <Text style={styles.loginText} >LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity  >
      <Text >Signup</Text>
    </TouchableOpacity>
   

  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#533549",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#f6b042",
    marginBottom:40,textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
    
  },
  inputView:{
    width:"80%",
    backgroundColor:"#f6b042",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#f6b04e",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"black",
    
  },
  tinyLogo: {
    width: 100,
    height: 100
  }
});


export default Login;