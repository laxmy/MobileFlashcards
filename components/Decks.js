import React, {Component} from 'react';
import { FlatList,View,Text, StyleSheet,TouchableHighlight } from 'react-native'
import SingleDeck from './SingleDeck'
import { fetchAllDecks } from '../utils/api'
import { silver, cyprus , crush } from '../utils/colors'

class Decks extends Component{
  state = {}

  static navigationOptions = () => {
    return {
      title:'Decks',
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        if (navigation.isFocused()) {
          return;
        }
        navigation.state.params.onTabFocus();
        defaultHandler();
      },
    };
  };

  componentDidMount(){
   this.fetchDataFromStore()
   this.props.navigation.setParams({
     onTabFocus: this.handleTabFocus
   })
  }

  handleTabFocus = () => {
   this.refreshNeeded(true)
  }

  fetchDataFromStore = ()=>{
    let receivedData = fetchAllDecks().then(
      receivedData =>  {
        this.setState({
          decks: receivedData
        })
      })
  }
  refreshNeeded =(isNeeded)=>{
    if(isNeeded)
    this.fetchDataFromStore()
  }

  handleOnPress = (item)=>{
    this.props.navigation.navigate('SingleDeck',{itemID:item.title, refreshListNeeded:this.refreshNeeded})
  }

  renderItem =({item })=>{
    return (
      <TouchableHighlight style={styles.listItem} onPress={()=>this.handleOnPress(item)}>
        <View style={styles.container}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.subTitleText}>{`${item.questions.length} Cards`}</Text>
        </View>
      </TouchableHighlight>)
  }

  render(){
    const decks = this.state.decks && Object.keys(this.state.decks).map(key=>this.state.decks[key])
    return (
      <View style={styles.container}>
      <FlatList data={ decks } keyExtractor={(item)=>item.title} renderItem={this.renderItem}/>
      </View>
    )}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: silver
  },
  listItem:{
    height:200,
    width: 400,
    borderColor: cyprus,
    borderWidth: 2,
    borderRadius: 5,
    margin:10
  },
  titleText:{
    color: cyprus,
    fontSize: 18,
    fontWeight: 'bold',
    margin:10
  },
  subTitleText:{
    color: crush,
    margin:10
  }
})

export default Decks
