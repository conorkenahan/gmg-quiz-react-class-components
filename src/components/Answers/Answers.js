import React from 'react';
import Context from '../../Context';

const Answers = () => {
  return (
    <Context.Consumer>
      {(context) => (
        context && (
          <div className="answers">
            {context && context.questions[context.currentQuestion].answers.map((answer, i) => (
              <button key={i} type="submit" className="answer" onClick={() => context.checkAnswer(answer)}>{answer}</button>
            ))}
          </div>
        )
      )}
    </Context.Consumer>
  );
};

export default Answers;
