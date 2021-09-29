import React, { useReducer } from 'react';
import './index.css';

const arithOPS = ['+', '-', '/', '%', '*']

function reducer(state, { type, payload }) {
    if (state === '0') {
        if (type === 'N') state = payload
    } else if (type === 'N') {
        state += payload
    } else if (type === 'O') {
        if (payload === '<' && state.length > 0) {
            state = state.slice(0, state.length - 1)
        } else if (payload === 'C') {
            state = '0'
        } else if (arithOPS.includes(payload) && !arithOPS.includes(state[state.length - 1])) {
            state += payload;
        } else if (payload === '=') {
            try {
                state = eval(state);
            } catch (e) {
                alert('Invalid expresssion')
            }
        }
    }
    return state;
}

function Calculator(props) {

    const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00']
    const operators = ['C', '<', '+', '-', '/', '*', '(', ')', '%', '=']
    const [exp, dispatch] = useReducer(reducer, '0')

    const appendToExp = (item, type) => {
        dispatch({ type, payload: item })
    }

    return (
        <div>
            <div className="calculator-container">
                <p className="calc-name">
                    casio
                </p>
                <div className="res">
                    {exp}
                </div>
                <div className="interaction">
                    <div className="numbers">
                        {numbers.map((item, i) => (
                            <div key={`num-${i}`} onClick={() => appendToExp(item, 'N')} className={item === '0' ? 'flex-2' : ''}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="operators">
                        {operators.map((item, i) => (
                            <div key={`op-${i}`} onClick={() => appendToExp(item, 'O')}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;