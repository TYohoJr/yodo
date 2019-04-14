import React, { Component } from 'react';
import './Calculators.css';
import { connect } from 'react-redux';
import { Input, Label, Form, FormGroup, Col, Row, Button, Nav, NavItem, NavLink, TabContent, TabPane, Table } from 'reactstrap';
import classnames from 'classnames';
import { LoanPayOffMonths } from '../Functions';
import ResultsTable from './ResultsTable';

class LoanPayOffCalc extends Component {
    constructor() {
        super();
        this.onLoanAmountChange = this.onLoanAmountChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onLoanAprChange = this.onLoanAprChange.bind(this);
        this.onLoanMonthsChange = this.onLoanMonthsChange.bind(this);
        this.onLoanPaymentChange = this.onLoanPaymentChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.calculate = this.calculate.bind(this);
        this.state = {
            loanAmount: '',
            activeTab: '1',
            loanApr: '',
            loanMonths: ',',
            loanPayment: '',
            resultsTable: null
        }
    }

    onLoanAmountChange(e) {
        this.setState({
            loanAmount: e.target.value
        })
    }

    toggle(tab) {
        if (this.state.activeTab === tab) {
            return;
        }
        switch (tab) {
            case '1':
                this.setState({
                    loanPayment: '',
                    activeTab: tab
                });
                break;
            case '2':
                this.setState({
                    loanMonths: '',
                    activeTab: tab
                });
                break;
            default:
                break;
        }
    }

    onLoanAprChange(e) {
        this.setState({
            loanApr: e.target.value
        })
    }

    onLoanMonthsChange(e) {
        this.setState({
            loanMonths: e.target.value
        })
    }

    onLoanPaymentChange(e) {
        this.setState({
            loanPayment: e.target.value
        })
    }

    resetForm() {
        this.setState({
            loanAmount: '',
            loanApr: '',
            loanMonths: ',',
            loanPayment: '',
            resultsTable: null
        })
    }

    calculate() {
        if(this.state.resultsTable) {
            this.resetForm();
        }
        if (this.state.activeTab === '1') {

        } else if (this.state.activeTab === '2') {
            this.setState({
                resultsTable: <ResultsTable data={LoanPayOffMonths({ ...this.state })} />
            });
        }
    }

    render() {
        return (
            <div className='calculator-page-contents'>
                <Form>
                    <Row>
                        <Col sm={1} />
                        <Col sm={4}>
                            <FormGroup row>
                                <Label>Loan Amount</Label>
                                <Input type='number' min={1} max={999999} onChange={this.onLoanAmountChange} value={this.state.loanAmount} />
                            </FormGroup>
                            <FormGroup row>
                                <Label>Loan APR (%)</Label>
                                <Input type='number' min={0} max={99} onChange={this.onLoanAprChange} value={this.state.loanApr} />
                            </FormGroup>
                        </Col>
                        <Col sm={1} />
                        <Col sm={4}>
                            <Nav tabs>
                                <NavItem className='loan-payoff-details-tab'>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => this.toggle('1')}
                                    >
                                        Monthly Payment
                                    </NavLink>
                                </NavItem>
                                <NavItem className='loan-payoff-details-tab'>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => this.toggle('2')}
                                    >
                                        Months To Payoff
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId='1'>
                                    <Row>
                                        <Col sm={12} md={{ size: 6, offset: 3 }} >
                                            <FormGroup row>
                                                <Label>Months to Payoff</Label>
                                                <Input type='number' min={1} max={1200} onChange={this.onLoanMonthsChange} value={this.state.loanMonths} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId='2'>
                                    <Row>
                                        <Col sm={12} md={{ size: 6, offset: 3 }} >
                                            <FormGroup row>
                                                <Label>Monthly Payment</Label>
                                                <Input type='number' min={1} max={999999} onChange={this.onLoanPaymentChange} value={this.state.loanPayment} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                        <Col sm={1} />
                    </Row>
                    <Button color='danger' onClick={this.resetForm}>Reset</Button>
                    <Button color='primary' onClick={this.calculate}>Submit</Button>
                    {this.state.resultsTable}
                </Form>

            </div>
        )
    }
}

export default connect((state) => (state))(LoanPayOffCalc);