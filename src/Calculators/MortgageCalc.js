import React, { Component } from 'react';
import './Calculators.css';
import { connect } from 'react-redux';

class MortgageCalc extends Component {
    render() {
        return (
            <div>
                MortgageCalc
            </div>
        )
    }
}

export default connect((state) => (state))(MortgageCalc);