import React, {Component} from 'react';
import {Answers} from './Answers';

export class Questions extends Component {
	constructor(props){
		super(props);
		this.state = {
			click: 0
		}
	this.setNextQuestion = this.setNextQuestion.bind(this);
	}
	setNextQuestion(props) {
		const newClick = this.props.counter +1;
		this.setState({
				click:newClick
		});
		this.props.updateCounter(newClick)
	}
	render() {
		// console.log(this.props.option); // array
		// console.log(typeof this.props.option); //object
		return (
			<div>Question:
				<ul>
					{this.props.question[this.state.click]}
					<Answers option={this.props.option[this.state.click]}/>
				</ul>
				<button
					onClick={this.setNextQuestion}
				>
					Next
				</button>
			</div>
		)
	}

}
