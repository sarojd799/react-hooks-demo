/* eslint-disable jsx-a11y/anchor-is-valid */
import { default as React } from 'react';
import { Link } from 'react-router-dom';


const AppRootHeader = () => {

    const routes = [
        { path: '/programs', label: 'Home' },
        { path: '/hooks/intro', label: 'Hooks' },
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-light app-header">
            <Link className="navbar-brand" to={routes[0].path}>
                React
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {routes.map((route, i) => {
                        return (
                            <li className="nav-item active" key={`link-${i}`}>
                                <Link className="nav-link" to={route.path} >
                                    {route.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};
export default AppRootHeader;