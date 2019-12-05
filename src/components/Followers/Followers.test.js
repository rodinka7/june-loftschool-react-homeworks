import React from 'react';
import { shallow } from 'enzyme';
import { Followers } from './Followers';

describe('Followers.js testing', () => {
    const wrapper = shallow(<Followers
                            className="followers" 
                            login='rodinka7' 
                            followersRequest={jest.fn()}
                            followers={[]}
                            isFetching={false} />);
    
    it('componentDidMount to be defined', () => {
        expect(wrapper.instance().componentDidMount).toBeDefined();
    })

    it('expects loader to exist when isFetching === true', () => {
        wrapper.setProps({isFetching: true});
        expect(wrapper.find('.Spinner')).toHaveLength(1);
    });

    it('The amount of followers is equal to followers length array', () => {
        wrapper.setProps({
            isFetching: false,
            followers: [
                {
                    id: 0,
                    login: 'rodinka7'
                },
                {
                    id: 1,
                    login: 'test_login'
                }
            ]
        });
        expect(wrapper.find('.follower-wrap')).toHaveLength(2);
    });

    it('Avatar block exists', () => {
        expect(wrapper.find('img')).toBeTruthy();
    });

    it('the user login should be passed by props', () => {
        wrapper.setProps({login: 'test_login'});
        expect(wrapper.instance().props.login).toEqual('test_login');
    });

    it('follower link is /user/{user.login}', () => {
        expect(wrapper.find('Link[to="/user/test_login"]'));
    });
})