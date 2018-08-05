import React,{ Component} from 'react'
import { View, Text ,TouchableOpacity, Button, StyleSheet } from 'react-native'
import { crush, white, cyprus } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Card extends Component{
  static navigationOptions = () => {
    return { title:''}
  }
  /*setHeaderTitle = () => {
    const { currentIndex, cards} =this.state
    const {setParams} = this.props.navigation
    const titleText =
    console.log(titleText)
    console.log(setParams)
    setParams({ title: titleText })
}*/
  state={
    currentIndex:0,
    cards:[],
    isFlipped: false,
    score:0,
    finishedQuiz: false
  }
 componentDidMount(){
   const deck = this.props.navigation.state.params.deck
   clearLocalNotification().then(setLocalNotification)
   this.setState(()=>({
     cards: deck.questions
   }))
 }
 toggleCard =()=>{
   this.setState((prevState)=>({
     isFlipped:!prevState.isFlipped
   }))
 }
 markAnswer = (correct) => {
    this.setState(prevState => {
      const newIndex = prevState.currentIndex+1
      return {
        currentIndex: newIndex >= prevState.cards.length ?
        prevState.currentIndex
        : newIndex,
        finishedQuiz: newIndex >= prevState.cards.length ? true : false,
        score: correct ? prevState.score+1: prevState.score
       }
    })
    this.setNotification()
}

setNotification =()=>{
  if(this.state.finishedQuiz)
    clearLocalNotification().then(setLocalNotification)
}
 startAgain = () => {
  this.setState(()=>(
    {
      currentIndex: 0,
      score: 0,
      finishedQuiz: false
    }
  ))
}

 render(){
   const{ cards, currentIndex, isFlipped, finishedQuiz, score } = this.state
   return (
     <View style={styles.container}>
     {
       finishedQuiz ?
        <View>
          <Text style={styles.titleText}>Your score: { Math.round((score/cards.length)*100) }%</Text>
          <Text style={styles.titleText}>{ score } correct answers out of { cards.length }</Text>
          <Button
            color={crush}
            title="Start again"
            onPress={this.startAgain}
          />
        </View>
       :
        <View>
        <View style={styles.top}>
         <Text>{`${currentIndex+1}/${cards.length}`}</Text>
        </View>
        { isFlipped ?
        <View>
          <Text style={styles.titleText}>{cards[currentIndex] && cards[currentIndex].answer}</Text>
          <Button title="View Question" color={crush} onPress={this.toggleCard}/>
        </View>
        :
        <View>
          <Text style={styles.titleText}>{cards[currentIndex] && cards[currentIndex].question }</Text>
          <Button title="View Answer" color={crush} onPress={this.toggleCard}/>
          <TouchableOpacity style={styles.btn} onPress={()=>this.markAnswer(true)} >
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>this.markAnswer(false)}>
            <Text style={styles.btnText}>Wrong</Text>
          </TouchableOpacity>
        </View>
       }
        </View>
   }
 </View>)
  }
 }

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  titleText:{
    fontSize: 20,
    fontWeight:'bold',
    color: cyprus,
  },
  cardPos:{
    alignSelf:'flex-start',
    color: white,
    backgroundColor: crush,
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
  },
  top:{
    alignSelf:'flex-start'
  }
})

export default Card
