import React from 'react';
import Context from '../../Context';

const Answers = () => {
    return (
        <Context.Consumer>
            {context => (
                <div className='answers'>
                    {context.questions[context.currentQuestion].answers.map(answer => (
                        <p>{answer}</p>
                    ))}
                </div>
            )}
        </Context.Consumer>
    )
}

export default Answers;