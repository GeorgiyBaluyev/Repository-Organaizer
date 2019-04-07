import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddRepo from './AddRepo';
import RepoList from './RepoList';
import UpdateRepo from './UpdateRepo';
import NotesList from '../Notes/NotesList';
import AddNote from '../Notes/AddNote';


export default class extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={RepoList}/>
                    <Route path="/addrepo" component={AddRepo}/>
                    <Route path="/updaterepo/:id" component={UpdateRepo}/>
                    <Route path="/noteslist/:id" component={NotesList}/>
                    <Route path="/addnote/:id" component={AddNote}/>
                </Switch>
            </div>
        );
    }
}