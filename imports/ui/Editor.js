import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

import { Notes } from '../api/notes';

export class Editor extends Component {
    render () {
        if(this.props.note) {
            return (
                <p>We got the note</p>
            );
        }else {
            return (
                <p>
                {this.props.selectedNoteId ? 'Note not found' : 'Pick or create a note to get started'}
                </p>
            );
        }
    }
}

export default createContainer(() => {
    const selectedNoteId = Session.get('selectedNoteId');

    return {
        selectedNoteId,
        note: Notes.findOne(selectedNoteId)
    };
}, Editor);