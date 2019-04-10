import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
    render() {
        return (
            <div>
                Home Page Content
            </div>
        )
    }
}

export default connect((state) => (state))(HomePage);