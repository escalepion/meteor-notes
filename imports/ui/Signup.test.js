import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { Signup } from './Signup';

if(Meteor.isClient) {
    describe('Signup', function () {

        it('should show error message', function () {
            const error = 'This is error';
            const wrapper = mount(<Signup />);
            wrapper.setState({ error });

            const componentErrorMessage = wrapper.find('p').text();
            expect(componentErrorMessage).toBe(error);

            wrapper.setState({ error: '' });
            expect(wrapper.find('p').length).toBe(0);
        });

        it('should call createUser with the form data', function () {
            const email = 'asdasd@asd.com';
            const password = 'password';
            const spy = expect.createSpy();
            const wrapper = mount(<Signup createUser={spy} />);

            wrapper.ref('email').node.value = email;
            wrapper.ref('password').node.value = password;
            wrapper.find('form').simulate('submit');

            expect(spy.calls[0].arguments[0]).toEqual({ email, password });
        });

        it('should set error if password is short', function () {
            const email = 'asdasd@asd.com';
            const password = '12345';
            const spy = expect.createSpy();
            const wrapper = mount(<Signup createUser={spy} />);

            wrapper.ref('email').node.value = email;
            wrapper.ref('password').node.value = password;
            wrapper.find('form').simulate('submit');

            const error = wrapper.state('error');
            expect(error.length).toBeGreaterThan(0);
        });

        it('should set createUser error', function () {
            const password = 'password';
            const reason = 'This is why it failed';
            const spy = expect.createSpy();
            const wrapper = mount(<Signup createUser={spy} />);

            wrapper.ref('password').node.value = password;
            wrapper.find('form').simulate('submit');

            spy.calls[0].arguments[1]({ reason });
            expect(wrapper.state('error')).toBe(reason);

            spy.calls[0].arguments[1]();
            expect(wrapper.state('error')).toBe('');
        });

    });
}
