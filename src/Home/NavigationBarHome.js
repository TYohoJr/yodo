import React from 'react';
import './Home.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Transactions from './Transactions';
import Accounts from './Accounts';
import Budgets from './Budgets';
import Reminders from './Reminders';
import Investment from './Investment';
import StockMarket from './StockMarket';

class NavigationBarHome extends React.Component {
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
            type: 'changeHomePageTab',
            currentTab: page
        });
    }

    render() {
        return (
            <div>
                <Nav tabs vertical>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.changeCurrentTab(<Transactions />, '1'); }}
                        >
                            Transactions
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.changeCurrentTab(<Budgets />, '2'); }}
                        >
                            Budgets
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.changeCurrentTab(<Accounts />, '3'); }}
                        >
                            Accounts
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.changeCurrentTab(<Reminders />, '4' ); }}
                        >
                            Reminders
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.changeCurrentTab(<Investment />, '5'); }}
                        >
                            Investment
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '6' })}
                            onClick={() => { this.changeCurrentTab(<StockMarket />, '6'); }}
                        >
                            Stock Market
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default connect((state) => (state))(NavigationBarHome);