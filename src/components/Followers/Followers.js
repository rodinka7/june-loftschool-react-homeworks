import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    followersRequest,
    followersSuccess,
    followersFailure,
    getFollowers,
    getFollowersError,
    getFollowersIsFetched,
    getFollowersIsFetching
} from '../../ducks/followers';
import { getIsFetching } from '../../ducks/users';

class Followers extends PureComponent {
    componentDidMount(){
        const { followersRequest, login } = this.props;
        console.log({login});
        
        followersRequest(login);
    }

    render(){
        return <div>Followers Component </div>
    }
}

const mapStateToProps = state => ({
    followers: getFollowers(state),
    isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
    followersRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Followers);