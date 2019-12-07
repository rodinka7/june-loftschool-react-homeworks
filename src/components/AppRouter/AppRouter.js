import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

const Main = styled.div`
    width: 80%;
`;

const Logout = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 2rem;

    button {
        background: papayawhip;
        color: rebeccapurple;
        border: none;   
        padding: 7px;     
        cursor: pointer;
        margin-left: auto;
    
        &:hover {
            background: palevioletred;
        }
    }
`;
export class AppRouter extends Component {    
    handleClick = () => {
        const { logout } = this.props;
        logout();
    }

    render() {
        const { isAuthorized, errorMessage, isError} = this.props;       
        
        return (
            <Main>
                {isError && 
                    <div className='error'>
                        {errorMessage}
                    </div>
                }

                {isAuthorized &&
                    <Logout className='logout'>
                        <button onClick={this.handleClick}>Logout</button>
                    </Logout>
                }  

                <Switch>
                    <Route path='/login' component={Login} />
                    <PrivateRoute path='/users/me' component={UserPage} isAuthorized={isAuthorized} exact />
                    <PrivateRoute path='/users/:name' component={UserPage} isAuthorized={isAuthorized} />                 
                    <Redirect to='/users/me' />
                </Switch>
            </Main>
        )
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AppRouter)
);