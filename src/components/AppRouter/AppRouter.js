import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';

import { getIsAuthorized, logout } from '../../ducks/auth';
import { getNetworkError, isNetworkErrorPresent } from '../../ducks/network';

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
    errorMessage: getNetworkError(state),
    isError: isNetworkErrorPresent(state)
});

const mapDispatchToProps = { logout };

export class AppRouter extends Component {
    handleClick = () => {
        const { logout } = this.props;
        logout();
    }

    render() {
        const { isAuthorized, errorMessage, isError} = this.props;

        return (
            <main>
                {isError && 
                    <div className='error'>
                        {errorMessage}
                    </div>
                }

                {isAuthorized &&
                    <div className='logout'>
                        <button onClick={this.handleClick}>Logout</button>
                    </div>
                }  

                <Switch>
                    <Route path='/login' component={Login} />
                    <PrivateRoute path='/users/me' component={UserPage} isAuthorized={isAuthorized} exact />
                    <PrivateRoute path='/users/:name' component={UserPage} isAuthorized={isAuthorized} />                 
                    <Redirect to='/users/me' />
                </Switch>
            </main>
        )
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AppRouter)
);