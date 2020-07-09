import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from './components/profile'
import FrontPage from './components/FrontPage'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import Layout from "./components/Layout"
import User1 from "./users/user1"

class App extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <NavBar />
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/signUp" component={SignUpForm} />
                    <Route exact path="/" component={FrontPage} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/user1" component={User1} />

                </Layout>
            </div>
        )
    }
}
export default App;
