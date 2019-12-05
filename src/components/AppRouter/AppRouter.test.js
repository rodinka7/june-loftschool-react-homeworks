import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import PrivateRoute from '../PrivateRoute';

describe('AppRouter.js', () => {
    const wrapper = shallow(<AppRouter />);
    
    it('Approter contains Switch tag', () => {
        expect(wrapper.find('Switch')).toHaveLength(1);
    })

    it('Approuter contains Route path="/users/me"', () => {
        expect(wrapper.containsMatchingElement(<PrivateRoute path="/users/me" />)).toBeTruthy();
    });

    it('Approuter contains Route path="/users/:name"', () => {
        expect(wrapper.containsMatchingElement(<PrivateRoute path="/users/:name" />)).toBeTruthy();
    });

    it('AppRouter contains Route path="/login"', () => {
        expect(wrapper.containsMatchingElement(<Route path="/login" />)).toBeTruthy();
    });
})
