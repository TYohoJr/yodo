import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';

class Investment extends Component {
    render() {
        return (
            <div>
                Investment
            </div>
        )
    }
}

export default connect((state) => (state))(Investment);