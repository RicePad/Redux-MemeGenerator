import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';
import {Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class MemeList extends Component {
	constructor(props){
		super(props);

		this.state = {
			memeLimit: 10,
			text0: '',
			text1: ''
		}
	}

	addMoreMemes(){
		this.setState({memeLimit: this.state.memeLimit+10})
	}


	render(){

		console.log('this.props', this.props)
		return(
				<div className="container">
					<h2>RicePad's Meme Generator</h2>
					<MyMemes />

					<div className="meme-editor">
						<Form inline>
							<FormGroup>
								<div className="ctrl-label"><ControlLabel>Top</ControlLabel></div>
								{' '}
								<FormControl
									type='text'
									onChange={(event) => this.setState({text0: event.target.value})}
								>
								</FormControl>
							</FormGroup>
							
							<FormGroup>
								<div className="ctrl-label"><ControlLabel>Bottom</ControlLabel></div>
								<FormControl
									type='text'
									onChange={(event) => this.setState({text1: event.target.value})}

								 >
							    </FormControl>
							</FormGroup>
						</Form>
					</div>
					
					<h3 
							className="meme-button" 
							// onClick={() => this.setState({memeLimit: this.state.memeLimit+10})}
							onClick={()=> this.addMoreMemes()}
					 >
							<b>Load more memes......</b>
					</h3>
					<div>
						{this.props.fetchMemes.slice(0, this.state.memeLimit).map((meme, index) => {
							return(
								<MemeItem 
									key={index} 
									meme={meme}
									text0={this.state.text0}
									text1={this.state.text1}
								/>
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