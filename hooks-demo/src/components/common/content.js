import React from 'react';
import { Routes, Route } from 'react-router-dom';

/**Modules */
import AppsModule from '../modules/programs';
import HooksModule from '../modules/hooks-exampe'

function AppRootContent(props) {
    return (
        <div className="app-content">
            <Routes>
                <Route path="/hooks" element={<HooksModule />} />
                <Route path="/programs" element={<AppsModule />} />
                <Route path="/" element={<AppsModule />} />
            </Routes>
        </div>
    );
}

export default AppRootContent;