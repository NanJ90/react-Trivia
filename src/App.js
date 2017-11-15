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
      // answer:[],
      counter:0
    };
    this.updateCounter = this.updateCounter.bind(this);
  }

  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
    .then(function(res) {
      return res.json();
    }).then(function(data) {
      // console.log(data.results);
      // console.log(data.results[0].correct_answer);
      // console.log(data.results[0].incorrect_answers);
        let questionArr = [];
        let optionArr = []
        for (var i = 0; i < data.results.length;i++) {
      // updating state, so those can be passed to question and answer components
        // decode question with special characters
          const decodeQ = entities.decode(data.results[i].question);
          // pushing to an array
          questionArr.push(decodeQ);
          // string for 10 times
          const answer = entities.decode(data.results[i].correct_answer);
          // console.log(answer); //string
          // console.log(data.results[i].incorrect_answers); //Array
          let option = data.results[i].incorrect_answers;
              option.push(answer)
          // console.log(option);
          optionArr.push(option);
        }
        this.setState({
          question:questionArr,
          option:optionArr
          // counter:0
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
    // console.log(this.state.question);
    // console.log(typeof this.state.option);
    return (
      <div className="App">
        <Questions question={this.state.question} option={this.state.option} counter={this.state.counter} updateCounter = {this.updateCounter}/>
      </div>
    );
  }
}

export default App;
