import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
iimport { createBottomTabNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is my first app!</Text>
      </View>
    );
  }
}

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions:{
      tabBarLabel:'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions:{
      tabBarLabel:'NewDeck'
    }
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Decks = function(){
  return(
    <View>
    <Text>Decks</Text>
    </View>)
};

const NewDecks = function(){
  return (
    <View>
      <Text>NewDeck</Text>
    </View>
  )
}
