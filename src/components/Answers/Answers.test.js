import React from 'react';
import ReactDOM from 'react-dom';
import Answers from './Answers';
import Context from "../../Context";

const value = {
  step: 'Start',
  score: 0,
  correct: [],
  currentQuestion: 0,
  questions: [{
      "title": "",
      "answers": [""],
      "correct": ""
    }],
  checkAnswer: () => {},
  resetQuiz: () => {}
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Context.Provider value={value}>
      <Answers />
    </Context.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
