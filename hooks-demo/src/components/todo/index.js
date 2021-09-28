import { useReducer, useRef, useContext, useImperativeHandle } from "react";
import { ChildDataContext } from '../../App'
import './todo.css'



function todoReducer(state = [], action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'remove':
            return state.filter(item => item !== action.payload)
        default:
            return state;
    }
}

function TODOComponent() {
    const [state, dispatch] = useReducer(todoReducer);
    const inputButton = useRef(null);
    const inputBox = useRef(null);
    const childData = useContext(ChildDataContext)

    useImperativeHandle(inputBox, () => ({
        focus: (e) => {
            console.log({ e })
        }
    }));

    const handleNewItemAdd = function () {
        dispatch({ type: 'add', payload: inputBox.current.value })
        inputBox.current.value = '';
    }

    const handleKeyUp = (e) => inputButton.current.disabled = !(e && e.target.value && e.target.value.trim());

    return (
        <div>
            <p className="mb-1rem f1-rem text-center">
                {childData}
            </p>
            <div className="todo-view">
                <div className="todo-input-container">
                    <input type="text" ref={inputBox} placeholder="Enter new task" onKeyUp={(e) => handleKeyUp(e)} />
                    <button ref={inputButton} className="todo-submit btn" onClick={() => handleNewItemAdd()}>
                        &#8250;
                    </button>
                </div>
                <div className="todo-list">
                    {
                        (state && state.length) ? state.map((item, i) => (
                            <p key={`key-${i}`}>
                                <span className="todo-content">{item}</span>
                                <button className="del-todo btn" onClick={() => dispatch({ type: 'remove', payload: item })}>
                                    &#x1F5D1;
                                </button>
                            </p>
                        )) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default TODOComponent