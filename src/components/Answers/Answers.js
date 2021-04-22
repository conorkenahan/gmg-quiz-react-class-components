import React from 'react';
import Context from '../../Context';

const Answers = () => {
    return (
        <Context.Consumer>
            {context => (
                <div className='answers'>
                    {context.questions[context.currentQuestion].answers.map((answer, i) => (
                        <button key={i} onClick={() => context.checkAnswer(answer)}>{answer}</button>
                    ))}
                </div>
            )}
        </Context.Consumer>
    )
}

export default Answers;