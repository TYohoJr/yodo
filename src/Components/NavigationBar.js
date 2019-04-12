import React from 'react';
import './Components.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import HomePage from '../Home/HomePage';
import CalculatorsPage from '../Calculators/CalculatorsPage';
import AboutPage from '../About/AboutPage';
import SupportPage from '../Support/SupportPage';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.changePage = this.changePage.bind(this);
        this.state = {
            isOpen: false,
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
                    <div id="navbar-brand-container">
                        <Container>
                            <Row>
                                <Col xs='3'>
                                    <Button onClick={() => this.changePage(<HomePage />)}>Home</Button>
                                </Col>
                                <Col xs='3'>
                                    <Button onClick={() => this.changePage(<CalculatorsPage />)}>Calculators</Button>
                                </Col>
                                <Col xs='3'>
                                    <Button onClick={() => this.changePage(<AboutPage />)}>About</Button>
                                </Col>
                                <Col xs='3'>
                                    <Button onClick={() => this.changePage(<SupportPage />)}>Support</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.props.logInReducer.userAccount}
                            {this.props.logInReducer.statusDropdown}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default connect((state) => (state))(NavigationBar);