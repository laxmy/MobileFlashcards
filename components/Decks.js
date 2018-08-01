import { React, Component} from React;
import { FlatList,View,Text } from 'react-native'

const listOfTempDecks ={ "Animals", "Plants","Cities","Flags","Computer"}

class Decks extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
      <FlatList data= {listOfTempDecks} renderItem={this.renderItem}/>
      </View>
  }
}

export default Decks
