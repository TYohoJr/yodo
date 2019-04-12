import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CurrentPage extends Component {
    componentWillMount() {
        const token = sessionStorage.getItem('token');
        const username = sessionStorage.getItem('username')
        if (token) {
            axios.post('/checkReAuth', { token, username }).then((result) => {
                if (result.data.message === "Login successful!") {
                    this.props.dispatch({
                        type: 'loadingData'
                    });
                    this.props.dispatch({
                        type: 'userLogIn',
                        data: result.data
                    });
                    setTimeout(() => {
                        this.props.dispatch({
                            type: "changeLogInStatus",
                        });
                        this.props.dispatch({
                            type: "showHomepage"
                        })
                    }, 2000);
                } else {
                    sessionStorage.removeItem('token');
                    sessionStorage.removeItem('username');
                }
            })
        }
    }
    render() {
        return (
            <div>
                {this.props.currentPageReducer.currentPage}
            </div>
        )
    }
}

export default connect((state) => (state))(CurrentPage);