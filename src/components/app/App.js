import React, { Suspense } from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import Home from '../home/Home';
import Loader from '../../shared/components/loader/Loader';
import ErrorBoundary from '../../shared/components/error/ErrorBoundary';
import Layout from '../layout/Layout';
import '../../shared/styles/body.css';

const TimeLogDashboardLazy = React.lazy(() => import(/* webpackChunkName: 'time-log-dashboard */ '../timeLogDashboard/TimeLogDashboard'));

const App = () => (
    <Layout>
        <Switch>
            <Route path="/time-log-dashboard">
                <ErrorBoundary>
                    <Suspense fallback={<Loader />}>
                         <TimeLogDashboardLazy />
                    </Suspense>
                </ErrorBoundary>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Layout>
);

export default App;
