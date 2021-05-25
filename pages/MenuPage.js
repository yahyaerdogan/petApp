
import * as React from 'react';
import { useState } from "react";
import { Button, Dimensions, FlatList, TouchableOpacity, View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Icon } from 'react-native-elements'
import { Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { DATA } from './PetData';
import FontAvasome5 from "react-native-vector-icons/FontAwesome5";


const iconCalendar = <FontAvasome5 name={'calendar-alt'} size={44}   />;
const iconAddNew = <FontAvasome5 name={'paw'} size={44}  />;
const iconBlog = <FontAvasome5 name={'newspaper'} size={44} />;
const iconHelp = <FontAvasome5 name={'question'} size={44} />;


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);





const MenuPage = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        onPress={() => navigation.navigate('ProfilePet')}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.petProfiles} >
        <FlatList horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>

      <View style={styles.menuItem}>

        <TouchableOpacity style={styles.calendar}>
          {iconCalendar}

          <View><Text style={styles.menuText}>TAKVİM</Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('AddPet')}
         style={styles.addNewPet}>
          {iconAddNew}
          <View><Text style={styles.menuText}>YENİ EKLE</Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.blog}>
          {iconBlog}
          <View><Text style={styles.menuText}>BLOG</Text></View>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Help')}
        style={styles.help}>
          {iconHelp}
          <View><Text style={styles.menuText}>YARDIM</Text></View>
        </TouchableOpacity>


      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#533549",
  },
  petProfiles: {
    width: "100%",
    height: "25%",
    backgroundColor: "#533549",
    marginTop: StatusBar.currentHeight || 0,


  },
  menuItem: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",


  },
  MenuItemLogo: {

    width: "auto",
    height: "auto",
    flex: 1,
    borderRadius: 50

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
  item: {
    alignItems: "center",
    justifyContent: "center",

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 25,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,

  },
  icon: {
    width: "40%",
    height: "40%",
  },
  menuText: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default MenuPage;