import React from 'react';
import Context from '../../Context';

const Answers = () => {
    return (
        <Context.Consumer>
            {context => (
                context && (
                    <div className='answers'>
                        {context && context.questions[context.currentQuestion].answers.map((answer, i) => (
                        <button className="answer" key={i} onClick={() => context.checkAnswer(answer)}>{answer}</button>
                        ))}
                    </div>
                )
            )}
        </Context.Consumer>
    )
}

export default Answers;