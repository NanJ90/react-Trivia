import React, { Component } from 'react';
import { Questions } from './components/Questions';

// using Fetch to get data from Trivia API
require('es6-promise').polyfill();
require('isomorphic-fetch');

// require package to decode questions
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question:[],
      option:[],
      counter:0
    };
    this.updateCounter = this.updateCounter.bind(this);
  }

  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
    .then(function(res) {
      return res.json();
    }).then(function(data) {
        let questionArr = [];
        let optionArr = []
        for (var i = 0; i < data.results.length;i++) {
      // updating state, so those can be passed to question and answer components
        // decode question with special characters
          const decodeQ = entities.decode(data.results[i].question);
          // pushing to an array
          questionArr.push(decodeQ);
          const answer = entities.decode(data.results[i].correct_answer);
          let option = data.results[i].incorrect_answers;
              option.push(answer)
          optionArr.push(option);
        }
        this.setState({
          question:questionArr,
          option:optionArr
        });
      }.bind(this))
    .catch(function(err) {
    console.log(err);
    });
  }

  updateCounter(newCounter) {
      this.setState({
        counter: newCounter
      });
    }

  render() {
    return (
      <div className="App">
        <Questions question={this.state.question} option={this.state.option} counter={this.state.counter} updateCounter = {this.updateCounter}/>
      </div>
    );
  }
}

export default App;
