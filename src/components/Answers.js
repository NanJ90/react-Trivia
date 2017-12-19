import React, {Component} from 'react';

export class Answers extends Component {
	constructor(props){
		super(props);
		this.state = {
				selectedOption:"",
				options:[]

		}
		this.handleOptionChange = this.handleOptionChange.bind(this);
		// this.setDefault = this.setDefault.bind(this);
	}
	handleOptionChange(changeEvent,item,i) {
		// console.log(item, i);
  this.setState({
    selectedOption: changeEvent.target.value
  });
}
	forceUpdate(){
		console.log(this.props);
		if(this.props.length !== 0) {
		let newQuestionArr = this.props.option.sort();
		let defaultAnswer;
		for (var i = 0; i < newQuestionArr.length; i++) {
			defaultAnswer = newQuestionArr[0];
		}
			this.setState({
				selectedOption: defaultAnswer,
				options: newQuestionArr
			})
		}
		return null;
	}

	render() {
		let answer = this.props.option;
		let listItems;
		if(answer !== undefined) {
			listItems = answer.sort().map((item, i) => (
				<div key={item}>
						<input type="radio" value={item} checked ={item === this.state.selectedOption} onChange={this.handleOptionChange}/>{item}
				</div>
			));
			}else {
				answer = null;
			}

		return (
			<form>
				{this.state.options.map((item, i) => (
					<div key={item}>
							<input type="radio" value={item} checked ={item === this.state.defaultAnswer} onChange={this.handleOptionChange}/>{item}
					</div>
				))}
				{listItems}

			</form>
		)

}

}
