import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addRepo} from "../../Actions/actions";

class AddRepo extends Component {
    constructor(props) {
        super(props);
    }

    addRepo() {
        const count = this.props.repos.length ? this.props.repos[this.props.repos.length - 1].id + 1 : 0;
        const repo = {
            name: this.nameInput.value,
            creatorName: this.creatorNameInput.value,
            stars: this.starsInput.value,
            description: this.descriptionInput.value,
            id: count,
            notes: []
        };
        this.props.onAddRepo(repo);
        console.log(this.props.repos);
    }


    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Add New Repository</h2>
                </div>
                <div className="card-body">
                    <h3>Name</h3> <input type="text" ref={input => this.nameInput = input}/><br/>
                    <h3>Creator Name</h3><input type="text" ref={input => this.creatorNameInput = input}/><br/>
                    <h3>Stars</h3><input type="text" ref={input => this.starsInput = input}/><br/>
                    <h3>Description</h3><textarea name="" id="" cols="30" rows="10"
                                                  ref={input => this.descriptionInput = input}/><br/>
                    <Link onClick={this.addRepo.bind(this)} className="btn badge-primary" to='/'>Add Repo</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repos: state.allRepos
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddRepo: (repo) => dispatch(addRepo(repo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRepo);