import React from 'react';
import './App.css';
import Context from './Context'
import Question from  './components/Question/Question';
import Summary from  './components/Summary/Summary';

export default class App extends React.Component {
  state = {
    step: 'start',
    score: 0,
    currentQuestion: 0,
    questions: [],
  }

  componentDidMount(){
    fetch('./data.json')
    .then(res => res.json())
    .then(data => this.setState({questions: data.questions}))
  }
  render() {
    let display;
    const {step} = this.state;

    if (step === 'start') {
      display = <button onClick={() => this.setState({step: 'question'})}>Start!</button>
    } else if (step === 'question') {
      display = <Question />
    }else if (step === 'summary') {
      display = <Summary />
    }
      return (
        <Context.Provider value={this.state}>
          <div className="App">
            <h1>Who sang what?</h1>
            <h2>A short quiz about the Beatles</h2>
            {display}
          </div>
        </Context.Provider>
      );
  }
}