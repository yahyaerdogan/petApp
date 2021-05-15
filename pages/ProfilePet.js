import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Text, View, StyleSheet, Image } from 'react-native'


 const imaj = require("../assets/rabbit.png");

console.log("imaj:" + imaj);

export default class ProfilePet extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.areaOne} >
          <View style={styles.profilePhoto}>
            <Image
              style={styles.photo}
              source={imaj}
            />
          </View>
          <View style={styles.basicInfo}>

          </View>
        </View>
        <View style={styles.areaTwo} >

        </View>
        <Image
              style={styles.photo}
              source={{ source: {imaj} }}
            />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#533549",
  },
  areaOne: {
    flex: 4,
    backgroundColor: "gray",
    flexDirection: "row"

  },
  areaTwo: {
    flex: 4
  },
  profilePhoto: {
    flex: 2,
    backgroundColor: "salmon",

  },
  basicInfo: {
    flex: 3,
    backgroundColor: "orange",
  },
  photo:{
    width: 150,
    height: 150,
  }

})