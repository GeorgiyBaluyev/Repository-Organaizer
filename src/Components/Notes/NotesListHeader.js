import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {deleteRepo} from "../../Actions/actions";

class NotesListHeader extends Component {
    deleteRepo = () => {
        this.props.onDeleteRepo(this.props.id)
    };

    render() {
        let description;
        let name;
        let stars;
        let source;
        for (let i = 0; i < this.props.repos.length; i++) {
            if (this.props.repos[i].id === this.props.id) {
                name = this.props.repos[i].name;
                description = this.props.repos[i].description;
                stars = this.props.repos[i].stars;
                source = this.props.repos[i].source;
            }
        }
        return (
            <div className='jumbotron list-header'>
                <div id="header-name">
                    <h1 className="display-4">{name}</h1>
                </div>
                <div className="header-button-back">
                    <Link className="btn btn-primary" to={"/"}>Back</Link>
                </div>
                <div id="header-caption">
                    <h6>{description}</h6> <br/>
                    <h3>{stars}</h3>
                </div>
                <div className="btn-group-vertical">
                    <Link className={source === 'gitHub' ? 'btn-none' : 'btn btn-warning'} to={`/updaterepo/:${this.props.id}`}>Update</Link>
                    <Link onClick={this.deleteRepo} className={source === 'gitHub' ? 'btn-none' : 'btn btn-danger'} to="/">Delete</Link>
                </div>
                <div className='header-button'>
                    <Link className= "btn btn-primary" to={`/addnote/:${this.props.id}`}>Add Note</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        repos: state.allRepos
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onDeleteRepo: id => dispatch(deleteRepo(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesListHeader);