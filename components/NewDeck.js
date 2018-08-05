import  React,{ Component } from 'react';
import { KeyboardAvoidingView, Text,TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import { crush, white, cyprus , grey} from '../utils/colors'
import { saveDeckTitle } from '../utils/api'

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
    saveDeckTitle(this.state.input).then(()=>{
    this.props.navigation.navigate('SingleDeck',{itemID:this.state.input})
    this.setState(()=>{input:''})
    })
  }
  static navigationOptions =() => {
    title:'Add Deck'
  }

  render(){
    const { input } = this.state
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
         <Text placeholder="Type in the name of the new deck" placeholderTextColor={grey}></Text>
        <TextInput style={styles.input} value={input} onChangeText={this.handleTextChange}/>
        <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
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
    width: 200,
    height: 45,
    padding: 8,
    borderColor: cyprus,
    borderBottomWidth:2,
  },
  btn:{
    backgroundColor: crush,
    width: 200,
    borderRadius: 5,
    margin: 10
  },
  btnText:{
    color: white,
    padding: 8,
    alignSelf: 'center'
  }
})

export default NewDeck
