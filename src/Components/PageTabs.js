import React, { Component } from 'react';

class PageTabs extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs='4'><Button className='page-btn'>Home</Button></Col>
                         <Col xs='4'><Button className='page-btn'>Calculators</Button></Col>
                        <Col xs='4'><Button className='page-btn'>About</Button></Col>
                        <Col xs='4'><Button className='page-btn'>Support</Button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}