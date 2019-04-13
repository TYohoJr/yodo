import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import NavigationBarHome from './NavigationBarHome';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavigationBarHome />
                {this.props.homePageReducer.currentTab}
            </div>
        )
    }
}

export default connect((state) => (state))(HomePage);