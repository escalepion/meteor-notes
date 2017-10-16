import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import PrivateHeader from './PrivateHeader';

if(Meteor.isClient) {
    describe('PrivateHeadaer', function () {
        it('should set button text to logout', function () {
            const wrapper = mount(<PrivateHeader title='text title' />);
            const buttonText = wrapper.find('button').text();

            expect(buttonText).toBe('Logout');
        });

        it('should use title prop as h1 text', function () {
            const title = 'This is sparta';
            const wrapper = mount(<PrivateHeader title={title} />);
            const titleText = wrapper.find('h1').text();

            expect(titleText).toBe(title);
        });

    });
}
