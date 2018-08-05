import React, { Component} from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import { crush, cyprus, white, silver } from '../utils/colors'
import Card from './Card'
import AddCard from './AddCard'
import { getDeck } from '../utils/api'


class SingleDeck extends Component{
  state={
  }
  fetchDataFromStore =(deckId)=>{
    getDeck(deckId).then(result =>{
        this.setState(()=>({
        deck : result
      }))
    })
  }
  static navigationOptions = ({navigation}) => {
   return {title: `${navigation.params.itemID}`}
  }
  componentDidMount(){
    const deckId = this.props.navigation.state.params.itemID
    this.fetchDataFromStore(deckId)
  }
  refreshNeeded =(isNeeded)=>{
    if(isNeeded){
      this.fetchDataFromStore(this.state.deck.title)
      this.props.navigation.state.params.refreshListNeeded(true)
    }
  }

  render(){
    const navigation = this.props.navigation
    const item = this.state.deck

    return item ? (
      <View style={ styles.deckItemContainer }>
      <Text style={ styles.deckTitle }>{item.title}</Text>
      <Text style={styles.subTitleText}>{`${item.questions.length} Cards`}</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('AddCard',{deckId: item.title,refreshNeeded:this.refreshNeeded})}>
        <Text style={styles.btnText}>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Card',{deck: item})}>
        <Text style={styles.btnText}>Start Quiz</Text>
      </TouchableOpacity>
      </View>
    ):(
      <View>nothing</View>
    )
  }
}
const styles = StyleSheet.create({
  deckItemContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:200,
    width: 400,
    borderColor: cyprus,
    borderWidth: 2,
    borderRadius: 10,
    margin:10
  },
  deckTitle:{
    color: cyprus,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
    padding: 10
  },
  btn:{
    backgroundColor: crush,
    width: 200,
    borderRadius: 5,
    margin: 5
  },
  btnText:{
    color: white,
    padding: 8,
    alignSelf: 'center'
  },
  subTitleText:{
    color: crush,
    margin:10
  }
})

export default SingleDeck
