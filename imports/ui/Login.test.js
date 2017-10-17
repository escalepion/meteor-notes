import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { Login } from './Login';

if(Meteor.isClient) {
    describe('Login', function () {

        it('should show error message', function () {
            const error = 'This is error';
            const wrapper = mount(<Login />);
            wrapper.setState({ error });

            const componentErrorMessage = wrapper.find('p').text();
            expect(componentErrorMessage).toBe(error);

            wrapper.setState({ error: '' });
            expect(wrapper.find('p').length).toBe(0);
        });

        it('should call loginWithPassword with the form data', function () {
            const email = 'asdasd@asd.com';
            const password = 'password';
            const spy = expect.createSpy();
            const wrapper = mount(<Login loginWithPassword={spy} />);

            wrapper.ref('email').node.value = email;
            wrapper.ref('password').node.value = password;
            wrapper.find('form').simulate('submit');

            expect(spy.calls[0].arguments[0]).toEqual({ email });
            expect(spy.calls[0].arguments[1]).toBe(password);
        });

        it('should set loginWithPassword error', function () {
            const spy = expect.createSpy();
            const wrapper = mount(<Login loginWithPassword={spy} />);

            wrapper.find('form').simulate('submit');

            spy.calls[0].arguments[2]({});
            expect(wrapper.state('error')).toNotBe('');

            spy.calls[0].arguments[2]();
            expect(wrapper.state('error')).toBe('');
        });

    });
}
