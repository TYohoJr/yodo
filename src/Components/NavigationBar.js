import React from 'react';
import './Components.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import SignUpModal from './SignUpModal';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.logInUser = this.logInUser.bind(this);
        this.onLogInPasswordChange = this.onLogInPasswordChange.bind(this);
        this.onLogInUsernameChange = this.onLogInUsernameChange.bind(this);
        this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
        this.state = {
            isOpen: false,
            logIn: 'Log In'
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logInUser() {
        if(cookie.get('username')) {
            return alert('You are already logged in. If you would like to use a different account, please log out and then back in.')
        }
        axios.post("/userLogIn", { username: this.props.logInReducer.logInUsername, password: this.props.logInReducer.logInPassword }).then((result) => {
            if (result.data.message === "Login successful!") {
                localStorage.setItem('token', result.data.myToken);
                cookie.set('username', result.data.user.username);
                cookie.set('data', result.data.user);
                this.props.dispatch({
                    type: "changeLogInStatus",
                    accountUsername: result.data.user.username,
                    logInGreeting: result.data.user.username
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
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">YoDo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {this.state.logIn}
                                </DropdownToggle>
                                <DropdownMenu id='dropdown-menu' right>
                                    <Input className='dropdown-content' placeholder='Username' />
                                    <Input className='dropdown-content' placeholder='Password' />
                                    <Button className='dropdown-content' color='success'>Log In</Button>
                                    <DropdownItem divider />
                                    <SignUpModal />
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default connect((state) => (state))(NavigationBar);