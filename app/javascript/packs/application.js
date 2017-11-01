import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

// Redux store setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

import { fetchMemes } from '../actions'

 const memeGenerator = document.getElementById('meme-app');
 const store = createStore(reducers, applyMiddleware(thunk))
 // console.log('store.getState()', store.getState())
 store.subscribe(() => console.log('store', store.getState()))
 store.dispatch(fetchMemes())

ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>, memeGenerator
	)