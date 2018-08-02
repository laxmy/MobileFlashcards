import React, {Component} from 'react';
import { FlatList,View,Text, StyleSheet } from 'react-native'
import SingleDeck from './SingleDeck'
import { fetchAllDecks } from '../utils/api'

class Decks extends Component{
  state = {}
  componentDidMount(){
    let dummyData = fetchAllDecks()
    this.setState({
      decks: dummyData
    })
  }
  renderItem =({item})=>{
    return <SingleDeck Item={item}/>
  }
  render(){
    console.log(this.state.decks)
    return(
      <View style={styles.container}>
    //  <FlatList data={this.state.decks} renderItem={this.renderItem}/>
      </View>)
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})

export default Decks
