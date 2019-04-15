import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddRepo from './AddRepo';
import RepoList from './RepoList';
import UpdateRepo from './UpdateRepo';
import NotesList from '../Notes/NotesList';
import AddNote from '../Notes/AddNote';
import FavoritesList from '../Favorites/FavoritesList';
import { fetchRepos } from "../../Actions/actions";
import { connect } from 'react-redux';


class Main extends React.Component {

    componentDidMount() {
        this.props.onFetchRepos();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={RepoList}/>
                    <Route path="/addrepo" component={AddRepo}/>
                    <Route path="/updaterepo/:id" component={UpdateRepo}/>
                    <Route path="/noteslist/:id" component={NotesList}/>
                    <Route path="/addnote/:id" component={AddNote}/>
                    <Route path="/favorites" component ={FavoritesList}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        state: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRepos : () => dispatch(fetchRepos())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);