import React, { Component } from 'react';
import './Components.css';
import {
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import HomePage from '../Home/HomePage';
import CalculatorsPage from '../Calculators/CalculatorsPage';
import AboutPage from '../About/AboutPage';
import SupportPage from '../Support/SupportPage';

class PageTabs extends Component {
    constructor() {
        super();
        this.changePage = this.changePage.bind(this);
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
                <Container>
                    <Row>
                        <Col xs='3'><Button onClick={() => this.changePage(<HomePage />)}>Home</Button></Col>
                        <Col xs='3'><Button onClick={() => this.changePage(<CalculatorsPage />)}>Calculators</Button></Col>
                        <Col xs='3'><Button onClick={() => this.changePage(<AboutPage />)}>About</Button></Col>
                        <Col xs='3'><Button onClick={() => this.changePage(<SupportPage />)}>Support</Button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect((state) => (state))(PageTabs);