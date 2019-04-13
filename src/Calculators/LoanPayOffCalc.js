import React, { Component } from 'react';
import './Calculators.css';
import { connect } from 'react-redux';

class LoanPayOffCalc extends Component {
    render() {
        return (
            <div>
                LoanPayOffCalc
            </div>
        )
    }
}

export default connect((state) => (state))(LoanPayOffCalc);