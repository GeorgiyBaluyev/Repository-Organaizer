import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateRepo} from "../../Actions/actions";

class UpdateRepo extends Component {
    updateRepo = () => {
        const id = +window.location.href.split(':')[window.location.href.split(':').length - 1];
        let notes;
        for (let i = 0; i < this.props.repos.length; i++) {
            if (this.props.repos[i].id === id) {
                notes = this.props.repos[i].notes
            }}
        this.props.onUpdateRepo(id, {
            name: this.nameInput.value,
            creatorName: this.creatorNameInput.value,
            stars: this.starsInput.value,
            description: this.descriptionInput.value,
            id: id,
            notes: notes
        })
    };

    render() {
        const id = +window.location.href.split(':')[window.location.href.split(':').length - 1];
        let name;
        let creatorName;
        let stars;
        let description;
        for (let i = 0; i < this.props.repos.length; i++) {
            if (this.props.repos[i].id === id) {
                name = this.props.repos[i].name;
                creatorName = this.props.repos[i].creatorName;
                stars = this.props.repos[i].stars;
                description = this.props.repos[i].description;
            }
        }
        console.log(this.props.repos.length);
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Update Repository</h2>
                </div>
                <div className="card-body">
                    <h3>Name</h3> <input type="text" defaultValue={name} ref={input => this.nameInput = input}/><br/>
                    <h3>Creator Name</h3><input type="text" defaultValue={creatorName}
                                                ref={input => this.creatorNameInput = input}/><br/>
                    <h3>Stars</h3><input type="text" defaultValue={stars} ref={input => this.starsInput = input}/><br/>
                    <h3>Description</h3><textarea defaultValue={description} name="" id="" cols="30" rows="10"
                                                  ref={input => this.descriptionInput = input}/><br/>
                    <Link onClick={this.updateRepo} className="btn badge-primary" to='/'>Update Repo</Link>
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
        onUpdateRepo: (id, repo) => dispatch(updateRepo(id, repo))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UpdateRepo);
