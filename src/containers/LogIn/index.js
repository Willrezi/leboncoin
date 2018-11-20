import React, { Component, Fragment } from "react";
import "./style.css";
import axios from "axios";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = event => {
    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response.data);
        this.props.LogIn({
          token: response.data.token,
          username: response.data.account.username,
          _id: response.data._id
        });
      });
    event.preventDefault();
  };

  render() {
    return <Fragment>This is the LogIn component</Fragment>;
  }
}

export default LogIn;
