import './App.css';
import Counter from './components/counter/counter';
import TODOComponent from './components/todo';
import SnakeGame from './components/basic/snake/snake';
import TicTacToe from './components/basic/tic-tac-toe'
import React, { useState } from 'react';


/**
 * 
 * React components are (often) written within ES6 modules, 
 * which automatically run in strict mode (emphasis mine):
 * Also, note that you might get different behavior from sections of script defined 
 * inside modules as opposed to in standard scripts. 
 * This is because modules use strict mode automatically
 */

// A function will not re-return in react by itself

const ChildDataContext = React.createContext();

function App() {

  const [component, setComponent] = useState({ name: 'default', component: <h5>Empty component</h5> })
  const componentItems = [
    { name: 'Counter Example', tag: <Counter />, description: 'Counts till 10' },
    { name: 'TODO Example', tag: <TODOComponent />, description: 'Tracks items to do' },
    { name: 'TIC-TAC-TOE', tag: <TicTacToe />, description: 'Not decided yet' },
    { name: 'SNAKE-In-Canvas', tag: <SnakeGame />, description: 'Not decided yet' },
  ]
  // console.log({ ref: this })  op: undefined

  return (
    <div className="App">
      <div className="container">
        <div className="left-panel section">
          <ul>
            {
              componentItems.map((comp, i) => (
                <button onClick={() => setComponent(comp)} key={`item-${i}`}>
                  {comp.name}
                </button>
              ))
            }
          </ul>
        </div>
        <div className="right-panel section">
          <ChildDataContext.Provider value={component.name}>
            {component.tag}
          </ChildDataContext.Provider>
        </div>
      </div>
    </div>
  );
}

export { ChildDataContext, App as default };
