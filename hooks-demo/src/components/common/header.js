/* eslint-disable jsx-a11y/anchor-is-valid */
import { default as React } from 'react';
import { useNavigate } from 'react-router-dom';

let currentRoute = null;
const routesReducer = function (route) {
    switch (route) {
        case "HOME": return '/programs'
        case "HOOKS": return '/hooks'
        default: return '/programs'
    }
}

const AppRootHeader = () => {

    const navigate = useNavigate();
    function setRoute(route) {
        console.log("called", route);
        currentRoute = routesReducer(route);
        console.log("called", currentRoute);
        navigate(currentRoute);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light app-header">
            <a className="navbar-brand" href='' onClick={() => setRoute("HOME")}>
                React
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href='' onClick={() => setRoute("HOME")}>
                            Home
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='' onClick={() => setRoute("HOOKS")}>
                            Features
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default AppRootHeader;