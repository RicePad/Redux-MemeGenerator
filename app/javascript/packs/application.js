import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

// Redux store setup
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

 const memeGenerator = document.getElementById('meme-app');
 const store = createStore(reducers)
 // console.log('store.getState()', store.getState())

ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>, memeGenerator
	)