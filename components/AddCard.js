import  React,{ Component } from 'react';
import { KeyboardAvoidingView, Text,TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import { crush, white, cyprus, grey } from '../utils/colors'
import { addCardToDeck } from '../utils/api'

class AddCard extends Component{
  static navigationOptions = () => ({
    title:'Add Card'
  })
  state = {
   question: '',
   answer: ''
 }

 addCard = () => {
   const { navigation, dispatch } = this.props
   const { question, answer } = this.state
   const deckId = (navigation.state.params.deckId)

   addCardToDeck(deckId, { question, answer }).then(()=>
   {
     navigation.state.params.refreshNeeded(true);
     navigation.goBack();
   })

 }

  handleQuestionChange=(input)=>{
    this.setState(()=>({
      question:input
    }))
  }
  handleAnswerChange=(input)=>{
    this.setState(()=>({
      answer:input
    }))
  }


  render(){

    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput style={styles.input} value={this.state.question} placeholder="Type in your question" placeholderTextColor={grey} onChangeText={this.handleQuestionChange}/>
        <TextInput style={styles.input} value={this.state.answer}
        placeholder="Type in your answer" placeholderTextColor={grey} onChangeText={this.handleAnswerChange}/>
        <TouchableOpacity style={styles.btn} onPress={this.addCard}>
          <Text style={styles.btnText}>Submit</Text>
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
    width:350,
    height: 45,
    padding: 8,
    borderColor: cyprus,
    borderBottomWidth:2,
  },
  btn:{
    backgroundColor: crush,
    width: 200,
    margin: 10,
    borderRadius: 5
  },
  btnText:{
    color: white,
    padding: 8,
    alignSelf: 'center'
  }
})

export default AddCard
