import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftPanel from './left-panel'
import './index.css'



function HooksModule(props) {
    return (
        <div className="hooks-container">
            <div className="left-panel__parent">
                <LeftPanel />
            </div>
            <div className="right-panel">
                <Outlet />
            </div>
        </div>
    );
}

export default HooksModule;