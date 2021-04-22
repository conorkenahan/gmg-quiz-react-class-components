import React from 'react';
import './App.css';
import Context from './Context';
import Question from './components/Question/Question';
import Summary from './components/Summary/Summary';
import getQuestions from './services/Questions';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 'start',
      score: 0,
      currentQuestion: 0,
      questions: [],

      checkAnswer: (guess) => {
        let { score, currentQuestion } = this.state;
        const { questions } = this.state;
        if (guess === questions[currentQuestion].correct) {
          score += 1;
          let questionsCopy = [...questions];
          questionsCopy[currentQuestion].answeredCorrect = true;
          this.setState({ questions: questionsCopy})
        }
        if (guess !== questions[currentQuestion].correct) {
        }
        currentQuestion += 1;
        if (currentQuestion >= questions.length) {
          this.setState({ score, step: 'summary' });
        } else {
          this.setState({ score, currentQuestion });
        }
      },

      resetQuiz: () => {
        this.setState({
          step: 'start', score: 0, currentQuestion: 0, correct: [],
        });
        getQuestions()
          .then((data) => this.setState({ questions: data.questions }))
      },
    };
  }

  componentDidMount() {
    getQuestions()
      .then((data) => this.setState({ questions: data.questions }))
  }

  render() {
    let display;
    const { step } = this.state;

    if (step === 'start') {
      display = <button type="button" onClick={() => this.setState({ step: 'question' })}>Start!</button>;
    } else if (step === 'question') {
      display = <Question />;
    } else if (step === 'summary') {
      display = <Summary />;
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
