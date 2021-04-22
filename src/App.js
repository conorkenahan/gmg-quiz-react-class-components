import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    step: 'start',
    score: 0,
    currentQuestion: 0,
    questions: [],
  }

  componentDidMount(){
    fetch("./data.json")
    .then(res => res.json())
    .then(data => this.setState({questions: data.questions}))
  }
  render() {
      return (
        <div className="App">
          <h1>Who sang what?</h1>
          <h2>A short quiz about the Beatles</h2>
        </div>
      );
  }
}