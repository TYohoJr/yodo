import React from 'react';
import './Components.css';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

class UserAccount extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentWillMount() {

  }

  render() {
    return (
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            {cookie.get('username')}
        </DropdownToggle>
        <DropdownMenu id='dropdown-menu' right>
            {/* <Input className='dropdown-content' value={this.props.logInReducer.logInUsername} onChange={this.onLogInUsernameChange} placeholder='Username' />
            <Input className='dropdown-content' type='password' value={this.props.logInReducer.logInPassword} onChange={this.onLogInPasswordChange} placeholder='Password' />
            <Button className='dropdown-content' color='success' onClick={this.logInUser}>Log In</Button> */}
            <DropdownItem divider />
            {/* <SignUpModal /> */}
        </DropdownMenu>
    </UncontrolledDropdown>
    );
  }
}

export default connect((state) => (state))(UserAccount);