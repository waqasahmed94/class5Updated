import React, { useReducer } from 'react';
import reducer from './reducer.js';


function Child2() {
    let [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <h1>Second child</h1>

            <h1>value of reducer count is: {state}</h1>

            <button onClick={()=>dispatch('INCREMENT')}>Increment by using Reducer</button>
        </div>

    );
}

export default Child2;