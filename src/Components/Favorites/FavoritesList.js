import React, {Component} from 'react';
import FavoritesHeader from "./FavoritesHeader";
import FavoriteRepo from "./FavoriteRepo";
import {setLocal} from "../../Actions/actions";
import {connect} from 'react-redux';


class FavoritesList extends Component {

    componentDidUpdate() {
        this.props.onSetLocal(this.props.state);
    }


    render() {
        const array = this.props.favorites.map(repo => <FavoriteRepo key={repo.id} id={repo.id} source={repo.source}
                                                                     favorite={repo.favorite} notes={repo.notes}
                                                                     name={repo.name} creatorName={repo.creatorName}
                                                                     description={repo.description}
                                                                     stars={repo.stars}/>);
        return (
            <div>
                <FavoritesHeader/>
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


const mapStateToProps = state => {
    return {
        favorites: state.favorites,
        state: state
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onSetLocal: store => dispatch(setLocal(store))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
