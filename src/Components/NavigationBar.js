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
    ButtonGroup,
    NavItem,
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap';
import { connect } from 'react-redux'

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.changePage = this.changePage.bind(this);
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

    changePage(page) {
        this.props.dispatch({
            type: 'changePage',
            currentPage: page
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">YoDo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink onClick={() => this.changePage('New Page Content')}>Components</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {this.state.logIn}
                                </DropdownToggle>
                                <DropdownMenu id='dropdown-menu' right>
                                    <Input className='dropdown-content' placeholder='Username' />
                                    <Input className='dropdown-content' placeholder='Password' />
                                    <Button className='dropdown-content' color='success'>Log In</Button>
                                    <DropdownItem divider />
                                    <Button className='dropdown-content' color='dark'>Create Account</Button>
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