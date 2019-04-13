import React, { Component } from 'react';
import './Calculators.css';
import { connect } from 'react-redux';

class RetirementCalc extends Component {
    render() {
        return (
            <div>
                RetirementCalc
            </div>
        )
    }
}

export default connect((state) => (state))(RetirementCalc);