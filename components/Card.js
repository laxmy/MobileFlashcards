import React,{ Component} from 'react'
import { View, Text } from 'react-native'
import { getDeck } from '../utils/api'

class Card extends Component{
  state={
    currentIndex:'0',
    cards:deck.questions
  }
 componentDidMount(){
   const deck = getDeck(this.props.title)
   this.setState(()=>{
     cards:deck.questions
   })
 }
 render(){
   return(
     <View>
     <Text>{this.props.title}</Text>
     </View>
   )
 }


}

export default Card
