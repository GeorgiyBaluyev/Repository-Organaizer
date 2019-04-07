import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteNote, setLocal} from "../../Actions/actions";

class NoteHeader extends Component {
    deleteNote = () => {
        this.props.onDeleteNote(this.props.location, this.props.id);
        this.props.onSetLocal(this.props.state);
        this.props.closeNote();
        console.log(this.props.state);
    };

    render() {
        return (
            <div id="note-header" className="card-header">
                <div className="text-muted">
                    {this.props.date}
                </div>
                <div>
                    <button onClick={this.deleteNote} className="btn btn-danger">X</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state : state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteNote: (idRepo, idNote) => dispatch(deleteNote(idRepo, idNote)),
        onSetLocal: store => dispatch(setLocal(store))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteHeader);