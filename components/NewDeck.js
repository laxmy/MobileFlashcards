import  React,{ Component } from 'react';
import { KeyboardAvoidingView, Text,TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import { crush,white } from '../utils/colors'

class NewDeck extends Component{
  state={
    input:"Deck Title"
  }
  handleTextChange=(input)=>{
    this.setState(()=>({
      input
    }))
  }

  handlePress=()=>{
    console.log(this.state.input)
  }
  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
         <Text>Type in the name of the new deck</Text>
        <TextInput style={styles.input} value={this.state.input} onChange={this.handleTextChange}/>
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
