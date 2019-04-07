import React, { Component } from 'react';
import Note from './Note'
import { setLocal } from "../../Actions/actions";
import { connect } from 'react-redux';

class NotesListBody extends Component{
    componentDidMount() {
        this.props.onSetLocal(this.props.state);
    }
    render() {
        let notes;
        for(let i = 0; i < this.props.repos.length; i++){
            if(this.props.repos[i].id === this.props.id){
                notes = this.props.repos[i].notes.map(note => <Note key={note.id} text={note.text} id={note.id} date={note.date} location={this.props.id}/>)
            }
        }
        return (
            <div>
                {notes}
            </div>
        );
    }
}


const mapStateToProps = state =>{
  return {
      state : state,
      repos : state.allRepos
  }
};
const mapDispatchToProps = dispatch =>{
    return {
        onSetLocal : (store) => dispatch(setLocal(store))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(NotesListBody);