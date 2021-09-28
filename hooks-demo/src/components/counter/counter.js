import { useState, useContext } from "react";
import { ChildDataContext } from '../../App'
import './counter.css'

function Counter() {

    const [count, setCount] = useState(0);
    const childData = useContext(ChildDataContext)

    return (
        <div>
            <p className="child-label">
                {childData}
            </p>
            <p class="counter-line">
                <button disabled={count === 0} onClick={() => setCount(count - 1)}> - </button>
                <span>{count}</span>
                <button disabled={count === 10} onClick={() => setCount(count + 1)}> + </button>
            </p>
        </div>

    )
}

export default Counter;