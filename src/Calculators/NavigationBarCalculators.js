import React from 'react';
import './Calculators.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import LoanPayOffCalc from './LoanPayOffCalc';
import MortgageCalc from './MortgageCalc';
import RetirementCalc from './RetirementCalc';
import SavingsCalc from './SavingsCalc';

class NavigationBarCalculators extends React.Component {
    constructor() {
        super();
        this.changeCurrentTab = this.changeCurrentTab.bind(this);
        this.state = {
            activeTab: '1'
        }
    }

    changeCurrentTab(page, tab) {
        if(this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
        this.props.dispatch({
            type: 'changeCalculatorsPageTab',
            currentTab: page
        });
    }

    componentWillMount() {
        this.props.dispatch({
            type: 'changeCalculatorsPageTab',
            currentTab: <LoanPayOffCalc />
        })
    }

    render() {
        return (
            <div>
                <Nav tabs vertical id='calculators-page-tabs'>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.changeCurrentTab(<LoanPayOffCalc />, '1'); }}
                        >
                            Loan Payoff Calculator
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.changeCurrentTab(<RetirementCalc />, '2'); }}
                        >
                            Retirement Calculator
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.changeCurrentTab(<SavingsCalc />, '3'); }}
                        >
                            Savings Calculator
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.changeCurrentTab(<MortgageCalc />, '4' ); }}
                        >
                            Mortgage Calculator
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.changeCurrentTab(<Investment />, '5'); }}
                        >
                            Investment
                        </NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '6' })}
                            onClick={() => { this.changeCurrentTab(<StockMarket />, '6'); }}
                        >
                            Stock Market
                        </NavLink>
                    </NavItem> */}
                </Nav>
            </div>
        );
    }
}

export default connect((state) => (state))(NavigationBarCalculators);