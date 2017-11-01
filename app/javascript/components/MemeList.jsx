import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemeItem from './MemeItem';

class MemeList extends Component {
	constructor(props){
		super(props);

		this.state = {
			memeLimit: 10
		}
	}




	render(){

		console.log('this.props', this.props)
		return(
				<div>
					<h2>RicePad's Meme Generator</h2>
					<h3 
							className="meme-button" 
							onClick={() => this.setState({memeLimit: this.state.memeLimit+10})}>
							<b>Load more memes......</b>
					</h3>
					<div>
						{this.props.fetchMemes.slice(0, this.state.memeLimit).map((meme, index) => {
							return(
								<MemeItem key={index} meme={meme}/>
								)})}
					
					</div>
				</div>
			)
	}

}


function mapStateToProps(state){
	
	return{
		fetchMemes: state.fetchMemes
	}
}

export default connect(mapStateToProps)(MemeList);