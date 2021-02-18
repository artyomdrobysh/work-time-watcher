import React, { Suspense } from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import Home from '../../pages/Home/Home';
import ErrorBoundary from '../../components/Error/ErrorBoundary';
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import ROUTES from '../../services/routes/routes-config';
import ninjaLogo from '../../static/assets/images/ninja_logo.png';
import '../../static/assets/styles/common.css';

const TimeLogDashboardLazy = React.lazy(() => import('../../pages/TimeLogDashboard/TimeLogDashboard'));

const routesArr = Object.entries(ROUTES).map(([key, val]) => val);

const App = () => (
    <Layout routes={routesArr} logo={{ source: ninjaLogo, title: 'ninja' }}>
        <Switch>
            <Route path={ROUTES.TIME_LOG_DASHBOARD.path} exact={ROUTES.TIME_LOG_DASHBOARD.exact}>
                <ErrorBoundary>
                    <Suspense fallback={<Loader />}>
                         <TimeLogDashboardLazy />
                    </Suspense>
                </ErrorBoundary>
            </Route>
            <Route path={ROUTES.HOME.path} exact={ROUTES.HOME.exact}>
                <Home />
            </Route>
        </Switch>
    </Layout>
);

export default App;
