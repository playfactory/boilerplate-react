import React from 'react'
import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

import Main from '../components/layouts/Main';
import Dashboard from '../pages/dashboard/index';


export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/dashboard" />
            <Route path="dashboard" component={Dashboard}> </Route>
        </Route>
    </Router>

);