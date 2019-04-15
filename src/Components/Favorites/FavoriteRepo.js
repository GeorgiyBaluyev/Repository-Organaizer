import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteRepo, addToFavorites, removeFromFavorites} from "../../Actions/actions";


class Repo extends Component {

    handleFavorite = () => {
        const repo = {
            name: this.props.name,
            creatorName: this.props.creatorName,
            stars: this.props.stars,
            description: this.props.description,
            id: this.props.id,
            notes: this.props.notes,
            source: this.props.source,
            favorite: !this.props.favorite
        };
        if(!this.props.favorite){
            this.props.onAddToFavorites(repo, this.props.id, !this.props.favorite);
        }
        if(this.props.favorite){
            this.props.onRemoveFromFavorites(this.props.id);
        }
    };


    deleteRepo = () => {
        this.props.onDeleteRepo(this.props.id);
    };

    render() {
        console.log(this.props.favorite);
        return (<tr>
            <td>{this.props.name}</td>
            <td>{this.props.creatorName}</td>
            <td>{this.props.stars}</td>
            <td className="actions">
                <Link className={this.props.source === 'gitHub' ? 'btn-none' : 'btn btn-warning'}
                      to={`/updaterepo/:${this.props.id}`}>Update</Link>
                <Link className='btn btn-primary' to={`/noteslist/:${this.props.id}`}>Details</Link>
                <button onClick={this.deleteRepo}
                        className={this.props.source === 'gitHub' ? 'btn-none' : 'btn btn-danger'}>Delete
                </button>
                <button onClick={this.handleFavorite} className="btn btn-danger">Remove from Favorite</button>
            </td>
        </tr>);
    }

}

const mapStateToProps = state => {
    return {state: state}
};
const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteRepo: (id) => dispatch(deleteRepo(id)),
        onAddToFavorites: (repo, boolean, id) => dispatch(addToFavorites(repo, boolean, id)),
        onRemoveFromFavorites: (id) => dispatch(removeFromFavorites(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Repo);
