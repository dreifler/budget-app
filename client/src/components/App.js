import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import ManagerPage from './ManagerPage';
import Profile from './Profile';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route path="/managerPage" component={ManagerPage}/>
                    <Route path="/profile" component={Profile}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);