import React from 'react';
import moment from 'moment';

const NoteListItem = (props) => {
    return (
        <div>
            <h5>{props.note.title || 'Untitled note'}</h5>
            <p>{moment(props.note.updatedAt).format('M/DD/YY')}</p>
        </div>
    );
};

export default NoteListItem;
