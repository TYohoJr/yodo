import React, { Component } from 'react';
import { connect } from 'react-redux';

class CalculatorsPage extends Component {
    render() {
        return (
            <div>
                Calculators Page Content
            </div>
        )
    }
}

export default connect((state) => (state))(CalculatorsPage);