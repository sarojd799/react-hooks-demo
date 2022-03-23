import './index.css';
import Counter from './counter/counter';
import TODOComponent from './todo';
import SnakeGame from './basic/snake/snake';
import Calculator from './calculator';
import TicTacToe from './basic/tic-tac-toe'
import Conversion from './conversion'
import ShuffleAndSort from './shuffle'
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

function AppsModule() {

  const [component, setComponent] = useState({ name: 'default', component: <h5>Empty component</h5> })
  const componentItems = [
    { name: 'Counter Example', tag: <Counter />, description: 'Counts till 10' },
    { name: 'TODO Example', tag: <TODOComponent />, description: 'Tracks items to do' },
    { name: 'TIC-TAC-TOE', tag: <TicTacToe />, description: 'Not decided yet' },
    { name: 'SNAKE GAME', tag: <SnakeGame />, description: 'Not decided yet' },
    { name: 'CALCULATOR', tag: <Calculator />, description: 'Not decided yet' },
    { name: 'SHUFFLE & SORT', tag: <ShuffleAndSort />, description: 'Not decided yet' },
    { name: 'NUM SYS CONVERSION', tag: <Conversion />, description: 'Not decided yet' }
  ]
  // console.log({ ref: this })  op: undefined

  return (
    <div className="programs">
      <div className="left-panel section">
        <ul>
          {
            componentItems.map((comp, i) => (
              <button
                className={comp.name === component.name ? 'active' : ''}
                onClick={() => setComponent(comp)} key={`item-${i}`}>
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
  );
}

export { ChildDataContext, AppsModule as default };
