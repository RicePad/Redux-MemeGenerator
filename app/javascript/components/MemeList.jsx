import React, { Component } from 'react';
import { connect } from 'react-redux';

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
					<h2>List of Memes</h2>
					<div>
						{this.props.fetchMemes.slice(0, this.state.memeLimit).map((meme, index) => {
							return(
								<h3 key={index}>{meme.name}</h3>
								)


						})}
					<div>
						<div 
							className="meme-button" 
							onClick={() => this.setState({memeLimit: this.state.memeLimit+10})}>
							Load more memes...
						</div>
					</div>
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