import React, { Component } from 'react';
import MemeList from './MemeList';


class App extends Component {

	render(){
		return(
			<div>
				<h2>RicePad's Meme Generator</h2>
				<MemeList />
			</div>
		)
	}
}


export default App;