import React from 'react';
import { Link } from 'react-router-dom';

export default function LeftPanel() {
    return (<div className='left-panel'>
        <ul>
            <li>
                <img alt="hook" height="1rem" width="1rem" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/hook-2419573-2040437.png" />
                <Link to="./intro">Hooks</Link>
            </li>
            <li>
                <img alt="hook" height="1rem" width="1rem" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/hook-2419573-2040437.png" />
                <Link to="./useState">useState</Link>
            </li>
            <li>useReducer</li>
            <li>useMemo</li>
        </ul>
    </div>)
}
