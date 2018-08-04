import React, {Component} from 'react';
import { FlatList,View,Text, StyleSheet } from 'react-native'
import SingleDeck from './SingleDeck'
import { fetchAllDecks } from '../utils/api'
import { silver } from '../utils/colors'

class Decks extends Component{
  state = {}
  componentDidMount(){
    let receivedData = fetchAllDecks().then(
      receivedData =>  {
        this.setState({
          decks: receivedData
        })
      })
  }
  renderItem =({item})=>{
    return <SingleDeck Item={item} Navigation={this.props.navigation}/>
  }
  render(){
    const decks = this.state.decks && Object.keys(this.state.decks).map(key=>this.state.decks[key])
    return (
      <View style={styles.container}>
      <FlatList data={ decks } keyExtractor={(item)=>item.title} renderItem={this.renderItem}/>
      </View>
    )}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: silver
  }
})

export default Decks
