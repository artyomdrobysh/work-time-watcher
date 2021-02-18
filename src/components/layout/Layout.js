import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import './style.css';

const Layout = ({ routes, logo, children }) => (
    <>
        <Header routes={routes} logo={logo} />
        <main>
            {children}
        </main>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
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

export default Layout;
