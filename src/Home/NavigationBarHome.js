import React from 'react';
import './Home.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import Transactions from './Transactions';

class NavigationBarHome extends React.Component {
    constructor() {
        super();
        this.showTransactions = this.showTransactions.bind(this);
    }

    showTransactions(tab) {
        console.log(tab)
        this.props.dispatch({
            type: 'changeHomePageTab',
            currentTab: tab
        })
    }

    render() {
        return (
            <div>
                <p>List Based</p>
                <Nav tabs vertical>
                    <NavItem>
                        <NavLink onClick={() => this.showTransactions(<Transactions />)}>Transactions</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Disabled Link</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default connect((state) => (state))(NavigationBarHome);