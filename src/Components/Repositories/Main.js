import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddRepo from './AddRepo';
import RepoList from './RepoList';
import UpdateRepo from './UpdateRepo';


export default class extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={RepoList}/>
                    <Route path="/addrepo" component={AddRepo}/>
                    <Route path="/updaterepo/:id" component={UpdateRepo}/>
                </Switch>
            </div>
        );
    }
}