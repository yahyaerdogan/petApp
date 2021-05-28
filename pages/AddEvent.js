import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class AddEvent extends Component {
  state = {
    eventName: "",
    eventDescription: "",
    eventDate: new Date(),
    eventTime: new Date(),
    show: false
  }

  _onChangeEventName = (value) => {
    this.setState({ eventName: value })
  }
  _onChangeEventDescription = (value) => {
    this.setState({ eventDescription: value })
  }
  _onChangeDate = (value) => {

    this.setState({ date: value.toDateString(), show: false });
  }
  showDate = () => {
    this.setState({ show: true });
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
        <Text style={styles.headerText}>Etkinlik tarihi: </Text>

        {this.state.show && (
          <DateTimePicker

            value={new Date()}
            onChange={this._onChangeDate}
          />
        )}
        <TouchableOpacity onPress={this.showDate} style={styles.eventName} >
          <Text>Tarih Seç</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createEvent} >
          <Text>Etkinlik oluştur</Text>
        </TouchableOpacity>

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
    textAlign: "center",
    justifyContent: "center"

  },
  headerText: {
    marginTop: 12,
    textAlign: "center",
  },
  createEvent: {
    backgroundColor: "rgb(47, 79, 79)",
    height: 50,
    margin: 12,
    borderRadius: 12,
    textAlign: "center",
    justifyContent: "center"
  }
})
