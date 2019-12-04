import React, { PureComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';

export default class PrivateRoute extends PureComponent {    
    render() {
        const { isAuthorized, component: Component, ...rest } = this.props;
        
        if (isAuthorized)
            return <Route render={props => <Component {...props} />} {...rest}/>;            
        else 
            return <Redirect to='/login' />
    }
}