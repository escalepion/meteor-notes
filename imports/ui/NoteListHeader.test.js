import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import { NoteListHeader } from './NoteListHeader';

if(Meteor.isClient) {
    describe('NoteListHeader', function() {

        it('should call meteorCall onclick', function() {
            const spy = expect.createSpy();
            const wrapper = mount(<NoteListHeader meteorCall={spy}/> );

            wrapper.find('button').simulate('click');
            // expect(wrapper.find('button').text()).toBe('Create Note');
            expect(spy).toHaveBeenCalledWith('notes.insert');
        });

    });
}