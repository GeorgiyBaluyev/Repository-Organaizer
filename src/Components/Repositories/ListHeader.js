import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListHeader extends Component {
    render() {
        return (
            <div className='jumbotron list-header'>
                <div>
                    <h1 className="h1">All Repositories</h1>
                </div>
              <div className='header-button'>
                  <Link className="btn btn-primary" to={"/favorites"}>Favorites</Link>
                  <Link className="btn btn-primary" to={"/addrepo"}>Add new Repository</Link>
              </div>
            </div>
        );
    }
}
export default ListHeader;