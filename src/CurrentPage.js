import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentPage extends Component {
    render() {
        return (
            <div>
                {this.props.currentPageReducer.currentPage}
            </div>
        )
    }
}

export default connect((state) => (state))(CurrentPage);