import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
    render() {
        return (
            <div>
                Support Page Content
            </div>
        )
    }
}

export default connect((state) => (state))(SupportPage);