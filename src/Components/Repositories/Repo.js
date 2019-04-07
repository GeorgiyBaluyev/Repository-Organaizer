import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { deleteRepo} from "../../Actions/actions";


class Repo extends Component {
    deleteRepo = ()=>{
        this.props.onDeleteRepo(this.props.id);
    };
    render() {
        return (<tr>
            <td>{this.props.name}</td>
            <td>{this.props.creatorName}</td>
            <td>{this.props.stars}</td>
            <td>
                <Link className='btn btn-warning' to={`/updaterepo/:${this.props.id}`}>Update</Link>
                <Link className='btn btn-primary' to={`/noteslist/:${this.props.id}`}>Details</Link>
                <button onClick={this.deleteRepo} className='btn btn-danger'>Delete</button>
            </td>
        </tr>);
    }

}

const mapStateToProps = state=>{
    return {state:state}
};
const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteRepo: (id) => dispatch(deleteRepo(id))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Repo);
