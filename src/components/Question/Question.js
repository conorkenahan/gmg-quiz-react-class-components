import React from 'react';
import Context from '../../Context';
import Answers from '../Answers/Answers';

const Question = () => {
    return (
        <Context.Consumer>
            {context => (
                context && (
                    <div className='question'>
                        <p>{context.questions[context.currentQuestion].title}</p>
                        <Answers />
                    </div>
                )
            )}
        </Context.Consumer>
    )
}

export default Question;