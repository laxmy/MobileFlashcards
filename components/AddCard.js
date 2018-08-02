import  React,{ Component } from 'react';
import { KeyboardAvoidingView, Text,TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import { crush,white } from '../utils/colors'

class AddCard extends Component{
  state={
    question:"Your Question",
    answer:"Your answer"
  }
  handleQuestionChange=(input)=>{
    this.setState(()=>({
      question
    }))
  }
  handleAnswerChange=(input)=>{
    this.setState(()=>({
      answer
    }))
  }

  handlePress=()=>{
    console.log(this.state.input)
  }
  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput style={styles.input} value={this.state.question} onChange={this.handleQuestionChange}/>
        <TextInput style={styles.input} value={this.state.answer} onChange={this.handleAnswerChange}/>
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

export default AddCard
