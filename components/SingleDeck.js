import React, {Component} from 'react';
import { View,Text } from 'react-native'

class SingleDeck extends Component{

  render(){
    return(
      <View style={{flex: 1}}>
      <Text>{this.props.item.key}</Text>
      </View>)
  }
}

export default SingleDeck
