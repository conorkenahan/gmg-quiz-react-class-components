import React from 'react';
import Context from '../../Context';

const Summary = () => {
    return (
        <Context.Consumer>
            {context => (
                context && 
                    (<div className='summary'>
                        <p>You scored {context.score} out of {context.questions.length} correct!</p>
                        <button onClick={() => context.resetQuiz()}>Reset Quiz</button>
                        {context.questions.map((question, i) => (
                            <div key={i}>
                                <p>{question.title}</p>
                                <p className={`${context.correct[i]}`}>{question.correct}</p>
                            </div>
                        ))}
                    </div>)
            )}
        </Context.Consumer>
    )
}

export default Summary;