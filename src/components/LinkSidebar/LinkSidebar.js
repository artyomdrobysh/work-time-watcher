import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, NavLink } from 'react-router-dom';

import './style.css';

const LinkSidebar = ({ items, className }) => {
    // useState
    const [isOpen, setIsOpen] = useState(true);

    // useCallback
    const memoizedChangeAsideDisplay = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    // useRouteMatch
    const { url } = useRouteMatch();
    
    return (
        <aside className={`${className} ${isOpen ? 'open' : ''}`}>
            <button type="button" onClick={memoizedChangeAsideDisplay}>
                {isOpen ? String.fromCodePoint(10005) : String.fromCodePoint(9776)}
            </button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <NavLink to={`${url}/${item.id}`}>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

LinkSidebar.defaultProps = {
    className: '',
};

LinkSidebar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    className: PropTypes.string,
};

export default LinkSidebar;
