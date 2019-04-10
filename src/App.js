import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import NavigationBar from './Components/NavigationBar';
import CurrentPage from './CurrentPage';
import PageTabs from './Components/PageTabs';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavigationBar />
          <PageTabs />
          <CurrentPage />
        </div>
      </Provider>
    );
  }
}
