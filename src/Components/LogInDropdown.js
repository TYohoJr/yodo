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
import Cookies from 'universal-cookie';

const cookie = new Cookies();

class LogInDropdown extends Component {
    constructor() {
        super();
        this.logInUser = this.logInUser.bind(this);
        this.onLogInPasswordChange = this.onLogInPasswordChange.bind(this);
        this.onLogInUsernameChange = this.onLogInUsernameChange.bind(this);
        this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
    }

    logInUser() {
        if (cookie.get('username')) {
            return alert('You are already logged in. If you would like to use a different account, please log out and then back in.')
        }
        axios.post("/userLogIn", { username: this.props.logInReducer.logInUsername, password: this.props.logInReducer.logInPassword }).then((result) => {
            if (result.data.message === "Login successful!") {
                localStorage.setItem('token', result.data.token);
                cookie.set('username', result.data.username);
                // cookie.set('data', result.data.user);
                this.props.dispatch({
                    type: "changeLogInStatus",
                });
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