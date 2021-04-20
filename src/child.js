import React, { useContext } from 'react';
import counterContext from './context';



function Child() {

    let counterValue = useContext(counterContext);
    return(

            <div>
            <h1>First Child</h1>
            <h1>Counter Value is:-  {counterValue}</h1>
            <button onClick = {()=>{counterValue[1](++counterValue[0])}}>INCRIMENT bY USING Context</button>
            </div>
    );
}
export default Child;