import React from 'react';
import './Components.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
      <ButtonDropdown id='account-dropdown' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {cookie.get('username')}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default connect((state) => (state))(UserAccount);