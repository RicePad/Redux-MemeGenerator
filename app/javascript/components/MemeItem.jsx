import React, { Component } from 'react';

class MemeItem extends Component {
	render(){
		// console.log('this.props from MemeItem', this.props)
		let { meme } = this.props
		return(
			<div className="meme-item">
				<div>{meme.name}</div>
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