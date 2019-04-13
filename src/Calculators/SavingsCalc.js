import React, { Component } from 'react';
import './Calculators.css';
import { connect } from 'react-redux';

class SavingsCalc extends Component {
    render() {
        return (
            <div>
                SavingsCalc
            </div>
        )
    }
}

export default connect((state) => (state))(SavingsCalc);