import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom';

import SingleFileUpload from '../../components/SingleFileUpload/SingleFileUpload';
import EmployeeSidebar from './EmployeeSidebar/EmployeeSidebar';
import LogTable from './LogTable/LogTable';
import { uploadXml } from './services/api/time-log-api';
import './style.css';

const TimeLogDashboard = () => {
    // useRouteMatch
    const { path } = useRouteMatch();

    return (
        <div className="time-log-dashboard">
            <EmployeeSidebar />
            <div>
                <Switch>
                    <Route path={`${path}/:employeeId`}>
                        <LogTable />
                    </Route>
                    <Route path={path}>
                        <SingleFileUpload uploadApi={uploadXml} />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default TimeLogDashboard;
