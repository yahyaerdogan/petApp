import React, { Component } from 'react'
import { Text, SafeAreaView, TouchableOpacity, Dimensions, View, StyleSheet, Image } from 'react-native'
import { event } from 'react-native-reanimated';

import FontAvasome5 from "react-native-vector-icons/FontAwesome5";

const pngRabbit = require("../assets/rabbit.png");


const iconAddEvent = <FontAvasome5 name={'calendar-plus'} size={44} />;
const iconPetInfo = <FontAvasome5 name={'window-restore'} size={44} />;
const iconNotes = <FontAvasome5 name={'clipboard'} size={44} />;
const iconOldEvents = <FontAvasome5 name={'calendar-check'} size={44} />;


export default class ProfilePet extends Component {

  state = {
    name: "Boby",
    kind: "Tavşan",
    gender: "Erkek",
    dateOfBirth: "15/06/2020"
 }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.areaOne} >
          <View style={styles.profilePhoto}>
            <Image

              style={styles.photo}
              source={pngRabbit}
            />
          </View>
          <View style={styles.basicInfo}>
            <Text style={styles.basicInfoText}>İsim:  <Text style={styles.stateInfo}>{this.state.name}</Text></Text>
            <Text style={styles.basicInfoText}>Tür:  <Text style={styles.stateInfo}>{this.state.kind}</Text></Text>
            <Text style={styles.basicInfoText}>Cinsiyet:  <Text style={styles.stateInfo}>{this.state.gender}</Text></Text>
            <Text style={styles.basicInfoText}>Doğum Tarihi:  <Text style={styles.stateInfo}>{this.state.dateOfBirth}</Text></Text>
          </View>
        </View>
        <View style={styles.areaTwo}>

          <TouchableOpacity style={styles.calendar}>
            {iconAddEvent}
            <View><Text style={styles.menuText}>ETKİNLİK EKLE</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addNewPet}>
            {iconPetInfo}
            <View><Text style={styles.menuText}>HAYVAN BİLGİLERİ</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blog}>
            {iconNotes}
            <View><Text style={styles.menuText}>NOTLAR</Text></View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.help}>
            {iconOldEvents}
            <View><Text style={styles.menuText}>ESKİ ETKİNLİKLER</Text></View>
          </TouchableOpacity>


        </View>


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
    backgroundColor: "#533549",
    flexDirection: "row",


  },
  areaTwo: {
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",

  },
  profilePhoto: {
    flex: 2,
    backgroundColor: "#f6b04e",
    alignItems: "center",
    justifyContent: "center"
  },
  basicInfo: {
    flex: 3,
    backgroundColor: "#f6b04e",
    justifyContent: "center",


  },
  basicInfoText: {
    fontSize: 18,
    marginTop: 11,
    marginLeft: 18

  },

  photo: {

    width: 111,
    height: 111,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 1
    }

  },

  calendar: {
    backgroundColor: "#f6b04e",
    height: "50%",
    width: '50%',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2


  },
  addNewPet: {
    backgroundColor: "#f6b04e",
    height: "50%",
    width: '50%',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2
  },
  blog: {
    backgroundColor: "#f6b04e",
    height: "50%",
    width: '50%',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2
  },
  help: {
    backgroundColor: "#f6b04e",
    height: "50%",
    width: '50%',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2
  },
  menuText: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  stateInfo:{
    fontWeight: "bold"
  }
});