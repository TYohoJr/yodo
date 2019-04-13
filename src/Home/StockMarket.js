import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';

class StockMarket extends Component {
    render() {
        return (
            <div>
                StockMarket
            </div>
        )
    }
}

export default connect((state) => (state))(StockMarket);