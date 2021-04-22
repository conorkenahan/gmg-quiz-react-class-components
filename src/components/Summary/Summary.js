import React from 'react';
import Context from '../../Context';

const Summary = () => {
    return (
        <Context.Consumer>
            {context => (
                <div className='summary'>
                    <p>You scored {context.score} out of {context.questions.length} correct!</p>
                    <button onClick={() => context.resetQuiz()}>Reset Quiz</button>
                </div>
            )}
        </Context.Consumer>
    )
}

export default Summary;