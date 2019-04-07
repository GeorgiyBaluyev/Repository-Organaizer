import React, {Component} from 'react';


class NoteBody extends Component {
    render() {
        return (
            <div className="card-body">
                {this.props.text}
            </div>
        );
    }
}

export default NoteBody;