import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.css';

const Header = ({ routes, logo }) => (
    <header>
        <nav>
            <ul>
                {routes.map((route, i) => (
                    <li key={i}>
                        <NavLink to={route.path} exact={route.exact}>
                            {route.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        <img src={logo.source} alt={logo.title} />
    </header>
);

Header.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        exact: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    logo: PropTypes.shape({
        source: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Header;
