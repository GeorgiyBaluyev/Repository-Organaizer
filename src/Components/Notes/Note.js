import React, { Component } from 'react';
import NoteBody from './NoteBody';
import NoteHeader from './NoteHeader';

class Note extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: true
        }
    }

    closeNote = () =>{
        this.setState({isOpen: false})
    };

    render() {
        return (
            <div style={{display : this.state.isOpen ? 'block' : 'none'}} id="note" className="card">
                <NoteHeader date={this.props.date} location={this.props.location} id={this.props.id} closeNote={this.closeNote}/>
                <NoteBody text={this.props.text}/>
            </div>
        );
    }
}

export default Note;