import React, { Component } from 'react';
import Search from '../Search';
import ShowPage from '../ShowPage';
import { withRouter, Route, Switch } from 'react-router-dom';
import './AppRouter.css';

class AppRouter extends Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact component={Search} />
                <Route path="/shows/:id" component={ShowPage} />
            </Switch>
        )
    }
}

export default withRouter(AppRouter);