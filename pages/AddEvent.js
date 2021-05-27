import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Input } from 'react-native-elements';

export default class AddEvent extends Component {
  state = {
    eventName: "",
    eventDescription: "",
    eventDate: new Date(),
    eventTime: new Date()
  }

  _onChangeEventName = (value) => {
    this.setState({ eventName: value })
  }
  _onChangeEventDescription= (value)=>{
    this.setState({eventDescription:value})
  }



  render() {



    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Etkinlik: {this.state.eventName}</Text>
        <TextInput style={styles.eventName}
          placeholder="Etkinlik başlığı giriniz  "
          onChangeText={this._onChangeEventName}
        />
        <Text style={styles.headerText}>Etkinlik hakkında: {this.state.eventDescription}</Text>
        <TextInput style={styles.eventName}
          placeholder="Etkinlik ayrıntılarını giriniz  "
          onChangeText={this._onChangeEventDescription}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(83, 53, 73)",


  },
  eventName: {
    height: 50,
    margin: 12,
    borderRadius: 12,
    backgroundColor: "rgb(246, 176, 66)",
    textAlign: "center"
  },
  headerText: {
    marginTop:12,
    textAlign: "center",
  }
})
