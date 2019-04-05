import React, {Component} from 'react';
import Repo from './Repo';
import ListHeader from './ListHeader';
import connect from "react-redux/es/connect/connect";
import {setLocal, updateRepo} from "../../Actions/actions";

class RepoList extends Component {
    componentDidMount() {
        this.props.onSetLocal(this.props.state);
    }
    componentDidUpdate() {
        this.props.onSetLocal(this.props.state);
    }
    render() {
        const array = this.props.state.allRepos.map(repo => <Repo key={repo.id} id={repo.id} stars={repo.stars}
                                                                  name={repo.name} creatorName={repo.creatorName}/>);
        return (
            <div>
                <ListHeader/>
                <div id={"list-body"}>
                    <table className='table table-hover table-bordered'>
                        <thead className='thead-dark'>
                        <tr>
                            <td><h3 className='display-4'>Name</h3></td>
                            <td><h3 className='display-4'>Creator Name</h3></td>
                            <td><h3 className='display-4'>Stars</h3></td>
                            <td><h3 className='display-4'>Actions</h3></td>
                        </tr>
                        </thead>
                        <tbody>
                        {array}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSetLocal: (store) => dispatch(setLocal(store))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(RepoList);