import React, { Component } from 'react'
import { Text, View, StyleSheet,Image, SafeAreaView } from 'react-native'

import FontAvasome5 from "react-native-vector-icons/FontAwesome5";

const uploadPhoto = <FontAvasome5 name={'plus'} size={44} />;

export default class AddPet extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topArea}>
        
          <View style={styles.addPhoto}>
          {uploadPhoto}
          <Text>Fotoğraf Ekle</Text>
          </View>
          
          <View style={styles.basicInfo}>

          </View>
        </View>


        <View style={styles.bottomArea}>

        </View>


      </SafeAreaView>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#533549",
  },
  topArea:{
    flex:1,
    
    flexDirection:'row'
    
  },
  bottomArea:{
    flex:1,
    backgroundColor:"salmon",  
  },
  addPhoto:{
    backgroundColor:"blue",
    flex:2,
    justifyContent:'center',
    alignItems:"center"

  },
  basicInfo:{
    backgroundColor:"red",
    flex:3,
    justifyContent:'center',
    alignItems:"center"
  }

})