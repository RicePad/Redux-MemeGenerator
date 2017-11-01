import { combineReducers } from 'redux';
import fetchMemes from './fetch_memes';
import myMemes from './my_memes_reducer.jsx'


export default combineReducers({
	fetchMemes,
	myMemes
})
	