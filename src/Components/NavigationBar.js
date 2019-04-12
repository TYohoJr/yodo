import React from 'react';
import './Components.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import { connect } from 'react-redux';
// import axios from 'axios';
// import Cookies from 'universal-cookie';
import LogInDropdown from './LogInDropdown';

// const cookie = new Cookies();

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        // this.logInUser = this.logInUser.bind(this);
        // this.onLogInPasswordChange = this.onLogInPasswordChange.bind(this);
        // this.onLogInUsernameChange = this.onLogInUsernameChange.bind(this);
        // this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // logInUser() {
    //     if (cookie.get('username')) {
    //         return alert('You are already logged in. If you would like to use a different account, please log out and then back in.')
    //     }
    //     axios.post("/userLogIn", { username: this.props.logInReducer.logInUsername, password: this.props.logInReducer.logInPassword }).then((result) => {
    //         if (result.data.message === "Login successful!") {
    //             localStorage.setItem('token', result.data.token);
    //             cookie.set('username', result.data.username);
    //             // cookie.set('data', result.data.user);
    //             this.props.dispatch({
    //                 type: "changeLogInStatus",
    //             });
    //         } else {
    //             return alert(result.data.message);
    //         }
    //     })
    // }

    // onLogInPasswordChange(e) {
    //     this.props.dispatch({
    //         type: "changeLogInPassword",
    //         logInPassword: e.target.value
    //     })
    // }

    // onLogInUsernameChange(e) {
    //     this.props.dispatch({
    //         type: "changeLogInUsername",
    //         logInUsername: e.target.value
    //     })
    // }

    // onShowPasswordChange() {
    //     if (this.props.logInReducer.showPassword === "password") {
    //         this.props.dispatch({
    //             type: "changeLogInShowPassword",
    //             showPassword: "text"
    //         })
    //     } else if (this.props.logInReducer.showPassword === "text") {
    //         this.props.dispatch({
    //             type: "changeLogInShowPassword",
    //             showPassword: "password"
    //         })
    //     }
    // }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">YoDo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.props.logInReducer.userAccount}
                            {this.props.logInReducer.statusDropdown}
                            {/* <LogInDropdown /> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default connect((state) => (state))(NavigationBar);