import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import SingleDeck from './components/SingleDeck'
import Card from './components/Card'
import AddCard from './components/AddCard'
import { crush, white } from './utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions:{
    tabBarLabel:'Decks',
    tabBarIcon: ({tintColor})=> <MaterialCommunityIcons name='cards' size={30}
    color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions:{
      tabBarLabel:'NewDeck',
      tabBarIcon:({tintColor})=><Ionicons name='md-add'
      size={30} color={tintColor} />
    },
  }
},
  {
    tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? crush : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white: crush,
    },
    labelStyle:{
      fontSize:14
    },
  }
})

const DeckNavigator = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Card: {
    screen: Card
  },
  AddCard:{
    screen: AddCard
  }
});

export default class App extends React.Component {
  render() {
    return (
      <DeckNavigator/>
    );
  }
}
