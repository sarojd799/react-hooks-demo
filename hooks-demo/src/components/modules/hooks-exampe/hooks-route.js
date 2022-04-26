import React from 'react';
import HooksIntro from './right-panel/hooks-intro';
import UseStateExample from './use-state';
import HooksModule from './main-view';


const hooksRoute = [
    {
        path: "/hooks",
        element: <HooksModule />,
        children: [
            {
                path: "intro",
                element: <HooksIntro />,
            },
            {
                path: "useState",
                element: <UseStateExample />,
            }
        ]
    }
];

export default hooksRoute;