import React, { Component } from 'react';
import './Components.css';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class LogInDropdown extends Component {
    constructor() {
        super();
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        sessionStorage.clear();
        window.location.reload();
    }

    render() {
        return (
            <Button color='danger' id='log-out-button' onClick={this.logOut}>Log Out</Button>
        )
    }
}

export default connect((state) => (state))(LogInDropdown);