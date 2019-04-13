import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';

class Reminders extends Component {
    render() {
        return (
            <div>
                Reminders
            </div>
        )
    }
}

export default connect((state) => (state))(Reminders);