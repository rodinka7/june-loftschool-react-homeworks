import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';

import { getData, getIsFetching, userRequest } from '../../ducks/users';
import Followers from '../Followers';

const UserImg = styled.img`
    width: 50%;
`;

export class UserPage extends Component {
    componentDidMount(){
        const { userRequest, match } = this.props;       
        userRequest(match.params.name);
    }

    componentDidUpdate(prevProps){        
        const { userRequest, match, location } = this.props;
        if (location.pathname !== prevProps.location.pathname){
            userRequest(match.params.name);
        }
    }

    render() {
        const { isFetching, data } = this.props;

        if (isFetching){
            return (
                <div className="notifications">
                    <div className="spinner-wrapper">
                        <Spinner className="Spinner" color="blue" size="64px" gap={5} />
                    </div>
                </div>
            )
        }

        if (!data){
            return (
                <div className="notifications">
                    <div className="notification no-data">There is no data ... </div>
                </div>
            )
        }
        
        const { login, avatar_url, following, public_repos } = data;               
                
        return (
            <div className="user-block">
                <div className="user">
                    <div className="user-img-wrap">
                        <UserImg className="user-img" src={avatar_url} alt={login} />
                    </div>
                </div>

                <div className="user-info">
                    <h3>{login}</h3>
                    <p>Public Repository: {public_repos}</p>
                    <p>Followings: {following}</p>
                </div>

                {login && <Followers className="followers" login={login} />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: getData(state),
    isFetching: getIsFetching(state)
})

const mapDispatchToProps = { userRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);