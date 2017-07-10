import React from 'react'
import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

import Dashboard from '../pages/dashboard/index';


export default (
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRedirect to="/dashboard" />
            <Route path="dashboard" component={Dashboard}> </Route>
        </Route>
    </Router>

);