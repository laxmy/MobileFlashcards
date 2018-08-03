import { AsyncStorage } from 'react-native'
import { DECKS_KEY ,formatResult} from './_decks'

export function fetchAllDecks () {
 return AsyncStorage.getItem(DECKS_KEY)
    .then(formatResult);
}

export function getDeck(key){
  return AsyncStorage.getItem(DECKS_KEY);
}

export function saveDeckTitle(key){
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [key]: {
      title:key,
      questions:[]
    }
  }))
}

export function addCardToDeck(id,card){
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
  const data = JSON.parse(result);
  data[id].questions.push(card);
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});
}
