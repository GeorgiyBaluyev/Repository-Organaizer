import React, { Component } from 'react';
import NotesListHeader from './NotesListHeader';
import NotesListBody from './NotesListBody'
import { connect } from 'react-redux';

class NotesList extends Component{
    render() {
        const id = +window.location.href.split(':')[window.location.href.split(':').length - 1];
        return (
            <div>
                <NotesListHeader id={id}/>
                <NotesListBody id={id}/>
            </div>
        );
    }
}

export default NotesList;