import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';

class Transactions extends Component {
    render() {
        return (
            <div>
                Transactions
            </div>
        )
    }
}

export default connect((state) => (state))(Transactions);