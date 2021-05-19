import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native'
import { Input } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


import FontAvasome5 from "react-native-vector-icons/FontAwesome5";

const uploadPhoto = <FontAvasome5 name={'plus'} size={44} />;


export default class AddPet extends Component {

  state = {
    name: "",
    genus: "",
    gender: "",
    species:"",
    date:{},
    mode:{},
    show:{},
    
  }

  _onChangeName = (value) => {//parameter = text --> instead of e or event
    this.setState({ name: value })
  }
  _onChangeGenus = (value) => {
    this.setState({ genus: value })
  }
  _onChangeSpecies = (value) => {
    this.setState({ genus: value })
  }
  _onChangeGender = (value) => {
    this.setState({ gender: value });
  }


  render() {

    const {
      name, genus, gender, species, date, mode, show
    } = this.state;



    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topArea}>

          <View style={styles.addPhoto}>
            {uploadPhoto}
            <Text>Fotoğraf Ekle{console.log("date: " , this.state.date)}</Text>
          </View>


          <View style={styles.basicInfo}>


            <TextInput style={styles.textInput}
              placeholder="İsim: "
              onChangeText={this._onChangeName}
            />


            <Picker style={styles.textInput}
              selectedValue={genus}
              
              onValueChange={this._onChangeGenus}>
              <Picker.Item label="Kedi" value="kedi" />
              <Picker.Item label="Köpek" value="kopek" />
              <Picker.Item label="Hamster" value="hamster" />
              <Picker.Item label="Balık" value="balik" />
              <Picker.Item label="Kuş" value="kus" />
              <Picker.Item label="Tavşan" value="tavsan" />
              <Picker.Item label="Kaplumbağa" value="Kaplumbaga" />

              
            </Picker>

            <Picker style={styles.textInput}
              selectedValue={gender}
              onValueChange={this._onChangeGender}>
              <Picker.Item label="Erkek" value="male" />
              <Picker.Item label="Dişi" value="female" />
            </Picker>

            <TextInput style={styles.textInput}
              placeholder="Tür: "
              onChangeText={this._onChangeSpecies}
            />



          </View>
        </View>


        <View style={styles.bottomArea}>

        
      {/* {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          //onChange={onChange}
        />
      )} */}
    
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
  topArea: {
    flex: 1,

    flexDirection: 'row'

  },
  bottomArea: {
    flex: 1,
    backgroundColor: "salmon",
    justifyContent: "center"
  },
  addPhoto: {
    backgroundColor: "blue",
    flex: 2,
    justifyContent: 'center',
    alignItems: "center"

  },
  basicInfo: {
    backgroundColor: "red",
    flex: 3,
    justifyContent: 'center',

  },
  textInput: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor:"rgb(246, 176, 66)"
  },

})