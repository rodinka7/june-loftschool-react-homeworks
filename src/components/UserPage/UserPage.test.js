import React from 'react';
import { shallow } from 'enzyme';
import { UserPage } from './UserPage';
import Followers from '../Followers';

describe('UserPage.js', () => {
    const wrapper = shallow(<UserPage
        userRequest={jest.fn()}
        isFetching={false}
        data={[]}
        match={{params: {name: 'name'}}}
        location={{pathname: 'pathname'}} />);

    it('componentDidUpdate to be defined', () => {
        expect(wrapper.instance().componentDidUpdate).toBeDefined();
    });

    it('Spinner exists', () => {        
        wrapper.setProps({isFetching: true});
        expect(wrapper.find('.Spinner')).toHaveLength(1);
    });

    it('show message about no data', () => {
        wrapper.setProps({ isFetching: false, data: null });
        expect(wrapper.find('.no-data').text()).toEqual('There is no data ... ');
    })

    it ('user avatar should be rendered', () => {
        wrapper.setProps({
            data: {
                login: "maxim1989",
                avatar_url: "https://avatars2.githubusercontent.com/u/6304900?v=4",
                following: 1,
                public_repos: 18
            }
        });        
        expect(wrapper.find('img[src="https://avatars2.githubusercontent.com/u/6304900?v=4"]')).toBeTruthy();
    });

    it('user login should be rendered', () => {
        expect(wrapper.find('h3').text()).toEqual('maxim1989');
    });

    it('following amount should be rendered', () => {
        expect(wrapper.find('p').filterWhere(item => 
            item.text().indexOf('Followings: ') !== -1
        )).toHaveLength(1);
    });

    it('Followings renders with login as props', () => {
        wrapper.setProps({
            data: {
                login: "maxim1989"
            }
        })
        expect(wrapper.containsMatchingElement(<Followers className="followers" login="maxim1989" />)).toBeTruthy();
    })
})