import React from 'react';
import { useRoutes } from 'react-router-dom';

/**Modules */
import AppsModule from '../modules/programs';
import hooksRoute from '../modules/hooks-exampe/hooks-route'

function AppRootContent(props) {

    const appRoutes = useRoutes([
        ...hooksRoute,
        {
            path: '/programs',
            element: <AppsModule />
        },
        {
            path: '/',
            element: <AppsModule />
        },
        {
            path: '*',
            element: (
                <div style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </div>
            )
        }
    ])

    return (
        <div className="app-content">
            {appRoutes}
        </div>
    );
}

export default AppRootContent;