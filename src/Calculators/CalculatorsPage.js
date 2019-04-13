import React, { Component } from 'react';
import './Calculators.css';
import { connect } from 'react-redux';
import NavigationBarCalculators from './NavigationBarCalculators';

class CalculatorsPage extends Component {
    render() {
        return (
            <div>
                <NavigationBarCalculators />
                {this.props.calculatorsReducer.currentTab}
            </div>
        )
    }
}

export default connect((state) => (state))(CalculatorsPage);