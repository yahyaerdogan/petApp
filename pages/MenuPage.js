
import * as React from 'react';
import { useState } from "react";
import { Button, Dimensions, FlatList, TouchableOpacity, View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Icon } from 'react-native-elements'
import { Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  }
];

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
        onPress={() => setSelectedId(item.id)}
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
          <View><Text>"logo"Calendar</Text>
            {/* <Icon
              raised
              name='calendar'

              type='font-awesome'
              color='#f50'
              onPress={() => console.log('hello')} /> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addNewPet}>
          <View><Text>"logo"Add New</Text>
            {/* <Image
              source={{ uri: "https://picsum.photos/200" }}
              style={styles.MenuItemLogo}
              PlaceholderContent={<ActivityIndicator />}
            /> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.blog}>
          <View><Text>"logo"Blog</Text></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.help}>
          <View><Text>"logo"Help</Text></View>
        </TouchableOpacity>


      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  petProfiles: {
    width: "100%",
    height: "25%",
    backgroundColor: "yellow",
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
    backgroundColor: "green",
    height: "50%",
    width: '50%',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2


  },
  addNewPet: {
    backgroundColor: "orange",
    height: "50%",
    width: '50%',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2
  },
  blog: {
    backgroundColor: "salmon",
    height: "50%",
    width: '50%',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2
  },
  help: {
    backgroundColor: "blue",
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
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2
  }
});

export default MenuPage;