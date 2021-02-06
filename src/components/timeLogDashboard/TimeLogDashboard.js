import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom';

import EmployeeSidebar from './employeeSidebar/EmployeeSidebar';
import LogTable from './logTable/LogTable';
import './styles/timeLogDashboard.css';

const TimeLogDashboard = () => {
    // useRouteMatch
    const { path } = useRouteMatch();

    return (
        <div className="time-log-dashboard">
            <EmployeeSidebar />
            <Switch>
                <Route path={`${path}/:userId`}>
                    <LogTable />
                </Route>
                <Route path={path}>
                    <h1>Выберите пользователя</h1>
                </Route>
            </Switch>
        </div>
    );
};

export default TimeLogDashboard;
