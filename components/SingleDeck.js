import React, { Component} from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import { crush, ripple, seafloor} from '../utils/colors'
import Card from './Card'
import AddCard from './AddCard'

function SingleDeck(props,{navigation}){
  return (
    <View style={ styles.deckItemContainer }>
    <Text style={ styles.deckTitle }>{props.Item.title}</Text>
    <Text>{`${props.Item.questions.length} Cards`}</Text>
    <TouchableOpacity onPress={()=>props.Navigation.navigate('AddCard',{})}>
    Add Card</TouchableOpacity>
    <TouchableOpacity onPress={() => props.Navigation.navigate('Card',{})}>
      <Text>Start Quiz</Text>
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  deckItemContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:200,
    width:200,
    borderColor:seafloor,
    backgroundColor:ripple,
    margin:10
  },
  deckTitle:{
    color:crush
  }
})

export default SingleDeck
