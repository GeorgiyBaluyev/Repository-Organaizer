import {Component} from "react";
import {Link} from "react-router-dom";
import React from "react";

class FavoritesHeader extends Component {
    render() {
        return (
            <div className='jumbotron list-header'>
                <div className='header-button'>
                    <Link className="btn btn-primary" to={"/"}>Back to all repos</Link>
                </div>
                <div>
                    <h1 className="h1">Favorite Repositories</h1>
                </div>
            </div>
        );
    }
}
export default FavoritesHeader;