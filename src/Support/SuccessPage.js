import React, { Component } from 'react';
import './Support.css';
import { connect } from 'react-redux';

class SuccessPage extends Component {
    render() {
        return (
            <div>
                Your support request has been sent. You will recieve a confirmation email to the email address you provided.
            </div>
        )
    }
}

export default connect((state) => (state))(SuccessPage);