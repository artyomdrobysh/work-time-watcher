import React from 'react';
import { NavLink } from 'react-router-dom';

import ninjaLogo from '../../../static/assets/layout/ninja_logo.png';
import './styles/header.css';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/time-log-dashboard">Журнал времени</NavLink>
                </li>
            </ul>
        </nav>
        <img src={ninjaLogo} alt="logo" />
    </header>
);

export default Header;
