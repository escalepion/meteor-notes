import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
    describe('NoteListItem', function() {

        it('should render title and timestamp', function() {
            const title = 'This is my title';
            const updatedAt = 1508327677118;
            const wrapper = mount( <NoteListItem note={{ title, updatedAt }} /> );
        
            expect(wrapper.find('h5').text()).toBe(title);
            expect(wrapper.find('p').text()).toBe('10/18/17');
        });

        it('should show Untitled Title if title is empty', function() {
            const title = '';
            const updatedAt = 1508327677118;
            const wrapper = mount( <NoteListItem note={{ title, updatedAt }} /> );
            
            expect(wrapper.find('h5').text()).toBe('Untitled note');
        });

    });
}
