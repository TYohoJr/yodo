import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';

class Accounts extends Component {
    render() {
        return (
            <div>
                Accounts
            </div>
        )
    }
}

export default connect((state) => (state))(Accounts);