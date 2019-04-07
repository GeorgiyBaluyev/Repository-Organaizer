import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListHeader extends Component {
    render() {
        return (
            <div className='jumbotron list-header'>
              <div id='header-button'>
                  <Link className="btn btn-primary" to={"/addrepo"}>Add new Repository</Link>
              </div>
            </div>
        );
    }
}
export default ListHeader;