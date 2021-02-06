import React, { useState, useCallback, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import Loader from '../../../shared/components/loader/Loader';
import apiConfig from '../../../shared/config/apiServices';
import './styles/employeeSidebar.css';

const EmployeeSidebar = () => {
    // useRouteMatch
    const { url } = useRouteMatch();

    // useState
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchError, setFetchError] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    const memoizedChangeAsideDisplay = useCallback(() => changeAsideDisplay(), [isOpen]);

    // useEffect
    useEffect(() => {
        let isSubscribed = true;
        fetch(`${apiConfig.timeLogServiceApi}/employee`)
            .then((result) => result.json())
            .then((json) => {
                if (isSubscribed) {
                    setUsers(json);
                    setIsLoaded(true);
                }
            }, (error) => {
                if (isSubscribed) {
                    setFetchError(error);
                }
            })
            .catch((error) => {
                if (isSubscribed) {
                    setFetchError(error);
                }
            });

        return () => {
            isSubscribed = false;
        };
    }, []);

    if (fetchError) {
        throw new Error(fetchError);
    }
    if (!isLoaded) {
        return <Loader />;
    }

    return (
        <>
            <aside className={`employee ${isOpen ? 'open' : ''}`}>
                <button
                    className="employee-sidebar-show-btn"
                    type="button"
                    onClick={() => memoizedChangeAsideDisplay()}
                >
                    {isOpen ? String.fromCodePoint(10005) : String.fromCodePoint(9776)}
                </button>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <NavLink
                                exact
                                to={`${url}/${user.id}`}
                            >
                                {user.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );

    function changeAsideDisplay() {
        setIsOpen(!isOpen);
    }
};

export default EmployeeSidebar;
