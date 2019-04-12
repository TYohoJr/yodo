import React, { Component } from 'react';
import './Components.css';
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Button,
} from 'reactstrap';
import SignUpModal from './SignUpModal';
import axios from 'axios';

class LogInDropdown extends Component {
    constructor() {
        super();
        this.logInUser = this.logInUser.bind(this);
        this.onLogInPasswordChange = this.onLogInPasswordChange.bind(this);
        this.onLogInUsernameChange = this.onLogInUsernameChange.bind(this);
        this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
    }

    logInUser() {
        if (this.props.userDataReducer.username) {
            return alert('You are already logged in. If you would like to use a different account, please log out and then back in.')
        }
        axios.post("/userLogIn", { username: this.props.logInReducer.logInUsername, password: this.props.logInReducer.logInPassword }).then((result) => {
            console.log(result)
            if (result.data.message === "Login successful!") {
                sessionStorage.setItem('token', result.data.token);
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
                }, 2000)
            } else {
                return alert(result.data.message);
            }
        })
    }

    onLogInPasswordChange(e) {
        this.props.dispatch({
            type: "changeLogInPassword",
            logInPassword: e.target.value
        })
    }

    onLogInUsernameChange(e) {
        this.props.dispatch({
            type: "changeLogInUsername",
            logInUsername: e.target.value
        })
    }

    onShowPasswordChange() {
        if (this.props.logInReducer.showPassword === "password") {
            this.props.dispatch({
                type: "changeLogInShowPassword",
                showPassword: "text"
            })
        } else if (this.props.logInReducer.showPassword === "text") {
            this.props.dispatch({
                type: "changeLogInShowPassword",
                showPassword: "password"
            })
        }
    }

    render() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Log In
                </DropdownToggle>
                <DropdownMenu id='dropdown-menu' right>
                    <Input className='dropdown-content' value={this.props.logInReducer.logInUsername} onChange={this.onLogInUsernameChange} placeholder='Username' />
                    <Input className='dropdown-content' type='password' value={this.props.logInReducer.logInPassword} onChange={this.onLogInPasswordChange} placeholder='Password' />
                    <Button className='dropdown-content' color='success' onClick={this.logInUser}>Log In</Button>
                    <DropdownItem divider />
                    <SignUpModal />
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
}

export default connect((state) => (state))(LogInDropdown);