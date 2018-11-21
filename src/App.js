import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./containers/Home";
import Header from "./components/Header";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Publish from "./containers/Publish";
import Offer from "./containers/Offer";

import "./App.css";

class App extends Component {
  state = {
    user: {
      token: Cookies.get("token") || null,
      username: Cookies.get("username") || null,
      _id: Cookies.get("_id") || null
    }
  };

  logIn = user => {
    Cookies.set("token", user.token);
    Cookies.set("username", user.username);
    Cookies.set("_id", user._id);

    this.setState({ user: user });
  };

  logOut = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    Cookies.remove("_id");
    this.setState({
      user: {
        token: null,
        username: null,
        _id: null
      }
    });
  };

  render() {
    const { user } = this.state;
    return (
      <Router>
        <Fragment>
          <Header />
          <Route
            exact
            path="/"
            render={props => <Home {...props} user={user} />}
          />
          <Route
            path="/sign_up"
            render={props => (
              <SignUp {...props} user={user} logIn={this.logIn} />
            )}
          />
          <Route
            path="/log_in"
            render={props => (
              <LogIn {...props} user={user} logIn={this.logIn} />
            )}
          />
          <Route
            path="/publish"
            render={props => (
              <Publish {...props} user={user} logIn={this.logIn} />
            )}
          />
          <Route
            path="/offer/:id"
            render={props => (
              <Offer {...props} user={user} logIn={this.logIn} />
            )}
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
