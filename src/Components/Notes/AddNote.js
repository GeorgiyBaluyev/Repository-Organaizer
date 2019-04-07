import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addNote} from "../../Actions/actions";


class AddNote extends Component {
    noteAdd = () => {
        const id = +window.location.href.split(':')[window.location.href.split(':').length - 1];
        const year = new Date().getFullYear();
        let month = new Date().getMonth();
        let day = new Date().getDate();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let noteId;
        for (let i = 0; i < this.props.repos.length; i++) {
            if (this.props.repos[i].id === id) {
                noteId = this.props.repos[i].notes.length ? this.props.repos[i].notes[this.props.repos[i].notes.length - 1].id + 1 : 0;
            }
        }
        if (String(month).length === 1) {
            month = `0${month}`;
        }
        if (String(day).length === 1) {
            day = `0${day}`;
        }
        if (String(hours).length === 1) {
            hours = `0${hours}`;
        }
        if (String(minutes).length === 1) {
            minutes = `0${minutes}`;
        }
        if (String(seconds).length === 1) {
            seconds = `0${seconds}`;
        }
        const note = {
            text: this.noteInput.value,
            date: `On: ${day}.${month}.${year}. At: ${hours}:${minutes}:${seconds}`,
            id: noteId
        };
        this.props.onAddNote(id, note);
        console.log(this.props.repos);

    };

    render() {
        const id = +window.location.href.split(':')[window.location.href.split(':').length - 1];
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Add Note</h2>
                </div>
                <div className="card-body">
                    <h3>Note</h3><textarea name="" id="" cols="30" rows="10"
                                           ref={input => this.noteInput = input}/><br/>
                    <Link onClick={this.noteAdd} className="btn badge-primary" to={`/noteslist/:${id}`}>Add Note</Link>
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
const mapDispatchToProps = (dispatch) => {
    return {
        onAddNote: (id, note) => dispatch(addNote(id, note))


    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddNote);