import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './Summary';
import Context from "../../Context";

const value = {
  step: 'Start',
  score: 0,
  correct: [],
  currentQuestion: 0,
  questions: [],
  checkAnswer: () => {},
  resetQuiz: () => {}
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Context.Provider value={value}>
      <Summary />
    </Context.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
