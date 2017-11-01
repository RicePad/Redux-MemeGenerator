import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions';

class MemeItem extends Component {
	
	postMeme(){
		// console.log('this.props', this.props)
		const {text0, text1} = this.props;
		const memeObj = {
			template_id: this.props.meme.id,
			text0,
			text1
		}
		this.props.createMeme(memeObj);
 
	}

	render(){
		// console.log('this.props from MemeItem', this.props)
		let { meme } = this.props
		return(
			<div 
				className="meme-item"
				onClick={() => this.postMeme()}

			>
				<div>
					{meme.name}
				</div>
				<img
					className="meme-image"
					src={meme.url}
					alt={meme.name}
				/>
			</div>
			)
	}
}


export default connect(null, { createMeme })(MemeItem);