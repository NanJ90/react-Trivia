import React, {Component} from 'react';

export class Answers extends Component {

	render() {
		let answer = this.props.option;
		let listItems;
		if(answer !== undefined) {
			listItems = answer.sort().map((item) => (
				<div key={item}>
						<input type="radio" value={item} />{item}
				</div>
			));
			}else {
				answer = null;
			}
		return (
			<form>
				{listItems}
			</form>
		)

}

}
