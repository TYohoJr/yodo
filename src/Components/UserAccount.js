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
        if (this.props.userDataReducer.data) {
            this.setState({
                username: this.props.userDataReducer.data.username
            })
        }
    }

    render() {
        return (
            // <div id='user-account-container'>
                <UncontrolledDropdown nav inNavbar id='user-account-container'>
                    <DropdownToggle nav caret>
                        {this.state.username}
                    </DropdownToggle>
                    <DropdownMenu id='dropdown-menu' right>
                        <DropdownItem divider />
                    </DropdownMenu>
                </UncontrolledDropdown>
            // </div>
        );
    }
}

export default connect((state) => (state))(UserAccount);