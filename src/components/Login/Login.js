import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { authorize, getIsAuthorized } from '../../ducks/auth';
import './Login.css';

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state)
});

const mapDispatchToProps = { authorize };

class Login extends Component {
    state = {
        accessToken: ''
    };

    handleKeyPress = evt => {
        if (evt.key !== 'Enter' || !this.state.accessToken)
            return;
        
        
        let { authorize } = this.props;
        authorize(this.state.accessToken);        
    }

    handleInputChange = evt => {
        this.setState({
            accessToken: evt.currentTarget.value
        });
    }

    render() {
        const { isAuthorized } = this.props;

        if (isAuthorized)
            return <Redirect to='/users/me' />;

        return <div>
            <p>Get your access token on GitHub website</p>
            <input 
                type="text" 
                onKeyPress={this.handleKeyPress} 
                onChange={this.handleInputChange}
                value={this.state.accessToken} 
                placeholder="Enter github authorization token" />
        </div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);