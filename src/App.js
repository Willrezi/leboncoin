import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cookies from "js-cookie";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" />
          <Route path="/sign-up" />
        </Fragment>
      </Router>
    );
  }
}

export default App;
