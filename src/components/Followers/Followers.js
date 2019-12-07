import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';

import {
    followersRequest,    
    getFollowers,
    getFollowersIsFetching
} from '../../ducks/followers';

const Main = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    img {
        width: 200px;
    }
`;

export class Followers extends Component {
    componentDidMount(){
        const { followersRequest, login } = this.props;
        followersRequest(login);
    }

    render(){
        const { followers, isFetching } = this.props;
        
        if (isFetching){
            return <div className="spinner-wrap">
                <Spinner className="Spinner" color="blue" size="64px" gap={5}/>
            </div>;
        }

        if (!followers || !followers.length){
            return <div>No followings data ...</div>;
        }

        return <Main>
            {
                followers.map(item => {
                    return <div key={item.id} className="follower-wrap">
                        <div className="follower-img-wrap">
                            <img className="follower-img"
                                src={item.avatar_url}
                                alt={item.login} />
                        </div>
                        <div className="follower-info">
                            <Link to={`/users/${item.login}`}>
                                <h3>{item.login}</h3>
                            </Link>
                        </div>
                    </div>
                })
            }
        </Main>
    }
}

const mapStateToProps = state => ({
    followers: getFollowers(state),
    isFetching: getFollowersIsFetching(state)
});

const mapDispatchToProps = {
    followersRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Followers);