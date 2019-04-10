import React, { Component } from 'react';
import { connect } from 'react-redux';

class AboutPage extends Component {
    render() {
        return (
            <div>
                About Page Content
            </div>
        )
    }
}

export default connect((state) => (state))(AboutPage);