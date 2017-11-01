import React, { Component } from 'react';
import { connect } from 'react-redux';


class MyMemes extends Component {

	render(){
			console.log('myMeme props', this.props)
		return(
			<div>
				<div>
					{
						this.props.myMemes.map((meme, index) => {
							return(
									<img
										key={index}
										src={meme.data.url}
										alt={meme.name}
										className="my-meme-img"

									 />
								)
						})
					}
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return{
	 myMemes: state.myMemes
	}

}


export default connect(mapStateToProps)(MyMemes);