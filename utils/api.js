import { AsyncStorage } from 'react-native'
import { DECKS_KEY ,formatResult} from './_decks'

export function fetchAllDecks () {
  return AsyncStorage.getItem(DECKS_KEY)
  .then(formatResult)
}

export function getDeck(key){
  return AsyncStorage.getItem(DECKS_KEY);
}

export function saveDeckTitle(){
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function addCardToDeck(){
  //// TODO:
}
