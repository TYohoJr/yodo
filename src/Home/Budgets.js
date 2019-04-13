import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';

class Budgets extends Component {
    render() {
        return (
            <div>
                Budgets
            </div>
        )
    }
}

export default connect((state) => (state))(Budgets);