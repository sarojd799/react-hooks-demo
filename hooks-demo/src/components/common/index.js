import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRootContent from './content';
import AppRootFooter from './footer';
import AppRootHeader from './header';
import './index.css'

function AppRootComponent(props) {
    return (
        <>
            <BrowserRouter>
                <AppRootHeader />
                <AppRootContent />
                <AppRootFooter />
            </BrowserRouter>
        </>
    );
}

export default AppRootComponent;