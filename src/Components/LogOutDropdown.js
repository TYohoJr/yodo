import React, { Component } from 'react';
import './Components.css';
import { connect } from 'react-redux';
import {
    // Collapse,
    // Navbar,
    // NavbarToggler,
    // NavbarBrand,
    // Nav,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // Input,
    Button,
} from 'reactstrap';

class LogInDropdown extends Component {
    render() {
        return (
            <Button color='danger' id='log-out-button'>Log Out</Button>
            // <UncontrolledDropdown nav inNavbar>
            //     <DropdownToggle nav caret>
            //         Log Out
            //     </DropdownToggle>
            //     <DropdownMenu id='dropdown-menu' right>
            //         <Input className='dropdown-content' value={this.props.logInReducer.logInUsername} onChange={this.onLogInUsernameChange} placeholder='Username' />
            //         <Input className='dropdown-content' type='password' value={this.props.logInReducer.logInPassword} onChange={this.onLogInPasswordChange} placeholder='Password' />
            //         <Button className='dropdown-content' color='success' onClick={this.logInUser}>Log In</Button>
            //         <DropdownItem divider />
            //         <SignUpModal />
            //     </DropdownMenu>
            // </UncontrolledDropdown>
        )
    }
}

export default connect((state) => (state))(LogInDropdown);