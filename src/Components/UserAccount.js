import React from 'react';
import './Components.css';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { connect } from 'react-redux';

class UserAccount extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      username: 'Loading..'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentWillMount() {
      debugger
      if (this.props.userDataReducer.data) {
          this.setState({
              username: this.props.userDataReducer.data.username
          })
      }
  }

  render() {
    return (
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            {this.state.username}
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