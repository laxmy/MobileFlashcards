import  React,{ Component } from 'react';
import { KeyboardAvoidingView, Text,TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import { crush,white } from '../utils/colors'
import {saveDeckTitle} from '../utils/api'

class NewDeck extends Component{
  state={
    input:"Deck Title"
  }
  handleTextChange=(input)=>{
    console.log(input)
    this.setState(()=>({
      input
    }))
  }

  handlePress=()=>{
    console.log(this.state.input)
    saveDeckTitle(this.state.input)
    this.props.navigation.navigate('SingleDeck')
  }
  render(){
    const { input } = this.state
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
         <Text>Type in the name of the new deck</Text>
        <TextInput style={styles.input} value={input} onChangeText={this.handleTextChange}/>
        <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
        <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    width:200,
    height:45,
    padding:8,
    borderColor:crush,
    borderWidth:2
  },
  btn:{
    backgroundColor: crush,
    color: white,
    width: 200,
    height:45,
    textAlign:'center'
  }
})

export default NewDeck
