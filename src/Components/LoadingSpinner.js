import React, { Component } from 'react';
import './Components.css';
import { connect } from 'react-redux';

class LoadingSpinner extends Component {
    render() {
        return (
            <div className='loading-spinner'></div>
        )
    }
}

export default connect((state) => (state))(LoadingSpinner);