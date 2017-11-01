import React, { Component } from 'react';

class MemeItem extends Component {
	render(){
		// console.log('this.props from MemeItem', this.props)
		let { meme } = this.props
		return(
			<div className="meme-item">
				<h3>{meme.name}</h3>
				<img
					className="meme-image"
					src={meme.url}
					alt={meme.name}
				/>
			</div>
			)
	}
}


export default MemeItem;