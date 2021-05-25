import React, { Component } from 'react'
import { Text, View, SafeAreaView, Button, StyleSheet, FlatList, StatusBar } from 'react-native'

const data = [
  {
    id: "1",
    title: "Question 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat, omnis temporibus modi beatae esse."
  },
  {
    id: "2",
    title: "Question 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt eveniet alias repellat, ipsum saepe aut veniam."
  },
  {
    id: "3",
    title: "Question 3",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, reprehenderit qui vel error voluptatem neque"
  },
  {
    id: "4",
    title: "Question 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, optio hic. Eaque fuga iure numquam fugit perferendis saepe"
  },
  {
    id: "5",
    title: "Question 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima optio repudiandae."
  },
  {
    id: "6",
    title: "Question 6",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi suscipit quod temporibus beatae quidem ex repellendus non blanditiis nulla soluta?"
  },
  {
    id: "7",
    title: "Question 7",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos exercitationem quibusdam quis ipsum voluptate animi ducimus! Cupiditate."
  }
]


const Item = ({ title, desc }) => (
  <View style={styles.itemArea} >
    <Text style={styles.titleArea} >{title}</Text>
    <Text style={styles.descArea} >{desc}</Text>
  </View>
);


export default class Help extends Component {




  render() {

    const renderItem = ({ item, desc }) => (
      <View>
        <Item title={item.title} desc={item.desc} />
      </View>
    );


    return (
      <SafeAreaView style={styles.container} >


        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id} />

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(83, 53, 73)",
    

  },
  itemArea: {
    backgroundColor: "rgb(246, 176, 78)",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  titleArea: {
fontWeight:"700"

  },
  descArea: {
    marginTop:12
  }
})
