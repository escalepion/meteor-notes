import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Notes } from '../api/notes';
import NoteListHEader from './NoteListHeader';

export const NoteList = (props) => {
    return (
        <div>
            <NoteListHEader />
            NoteList component { props.notes.length }
        </div>
    );
};

export default createContainer(() => {
    Meteor.subscribe('notes');

    return {
        notes: Notes.find().fetch()
    };
}, NoteList);
