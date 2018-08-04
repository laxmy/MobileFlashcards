import React,{ Component} from 'react'
import { View, Text ,TouchableOpacity, Button, StyleSheet } from 'react-native'
import { getDeck } from '../utils/api'
import { crush, white, cyprus } from '../utils/colors'

class Card extends Component{
  state={
    currentIndex:0,
    cards:[],
    isFlipped: false,
    score:0,
    finishedQuiz: false
  }
 componentDidMount(){
   const deckId = this.props.navigation.state.params.deckId
   getDeck(deckId).then(deck =>{
     this.setState(()=>({
       cards: deck.questions
     }))
   })
 }
 toggleCard =()=>{
   this.setState((prevState)=>({
     isFlipped:!prevState.isFlipped
   }))
 }
 markAnswer = (correct) => {
    let { cards, score, currentIndex, finishedQuiz } = this.state
    score = correct ? score + 1 : score
    currentIndex++
    finishedQuiz = index === cards.length
    this.setState({ currentIndex, score, finishedQuiz})
  }
 render(){
   const{ cards, currentIndex, isFlipped, finishedQuiz } = this.state
   return

      finishedQuiz ?
          (
            <View>
              <Text style={styles.titleText}>Your score: { Math.round((score/totalNoOfCards)*100) }%</Text>
              <Text style={styles.titleText}>{ score } correct answers out of { totalNoOfCards }</Text>
              <Button
                style={styles.btn}
                title="Start again"
              />
            </View>
          )
      :
      (<View style={styles.container}>
      <Text style={styles.cardPos}>{`${currentIndex+1}/${cards.length}`}</Text>
        { isFlipped ?
         ( <View>
         <Text style={styles.titleText}>{cards[currentIndex] && cards[currentIndex].answer}</Text>
         <Button title="View Question" onPress={this.toggleCard}/>
        </View>)
        :
        (
          <View>
          <Text style={styles.titleText}>{cards[currentIndex] && cards[currentIndex].question }</Text>
          <Button title="View Answer" onPress={this.toggleCard}/>
          <TouchableOpacity style={styles.btn} onPress={this.markAnswer(true)}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.markAnswer(false)}>
            <Text style={styles.btnText}>Wrong</Text>
          </TouchableOpacity>
          </View>
        )}
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
    fontSize: 16,
    fontWeight:'bold',
    color: cyprus,
  },
  cardPos:{
    alignSelf:'flex-start',
    color:cyprus
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

export default Card
