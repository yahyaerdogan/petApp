import React, { Component } from 'react'
import { Text, View, StyleSheet,Image, SafeAreaView } from 'react-native'

export default class AddPet extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topArea}>
        
          <View style={styles.addPhoto}>

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
    backgroundColor:"green",
    
  },
  bottomArea:{
    flex:1,
    backgroundColor:"salmon",
    
  }

})