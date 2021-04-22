import React from 'react';
import Context from '../../Context';

const Summary = () => {
    return (
        <Context.Consumer>
            {context => (
                <div className='summary'>
                    Summary
                </div>
            )}
        </Context.Consumer>
    )
}

export default Summary;