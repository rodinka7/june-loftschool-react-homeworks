import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Login from './Login';
import UserPage from './UserPage';

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/users/me">
                    <UserPage />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        )
    }
}

export default withRouter(AppRouter);