import React from 'react';
import { shallow } from 'enzyme';
import { Route, Redirect } from 'react-router-dom';
import { AppRouter } from './AppRouter';

describe('AppRouter.js', () => {
    const wrapper = shallow(<AppRouter />);
    
    it('Approuter contains Route path="/users/me"', () => {
        expect(wrapper.containsMatchingElement(<Route path="/users/me" />)).toBeTruthy();
    });

    it('AppRouter contains Route path="/login"', () => {
        expect(wrapper.containsMatchingElement(<Route path="/login" />)).toBeTruthy();
    });

    it('AppRouter contains <Redirect to="/login" />', () => {
        expect(wrapper.containsMatchingElement(<Redirect to="/login" />)).toBeTruthy();
    })
})
