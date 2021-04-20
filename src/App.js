import React, {useState} from 'react';
import './App.css';
import Child from './child.js';
import Child2 from './child2.js';
import counterContext from './context.js';

function App() {

  let counter = useState(0)
  return (


    <counterContext.Provider value = {counter}>
    <div className="App">
          <Child />
          <Child2 />
          
    </div>
    </counterContext.Provider>
  );
}

export default App;
