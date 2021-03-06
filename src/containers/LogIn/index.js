import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        this.props.logIn({
          token: response.data.token,
          username: response.data.account.username,
          _id: response.data._id
        });
        this.props.history.push("/");
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="login-form">
          <h2 className="login-title">Connexion</h2>
          <form onSubmit={this.onSubmit}>
            <label>Adresse email</label>
            <input
              className="login-input"
              type="email"
              required
              onChange={event => {
                this.setState({ email: event.target.value });
              }}
              value={this.state.email}
            />
            <label>Mot de passe</label>
            <input
              className="login-password"
              type="password"
              required
              onChange={event => {
                this.setState({ password: event.target.value });
              }}
              value={this.state.password}
            />
            <button className="login-button" type="submit">
              Se connecter
            </button>
          </form>
        </div>

        <hr />
        <div className="link-part">
          <h2>Vous n'avez pas de compte</h2>

          <Link to={{ pathname: "/sign_up" }}>
            <button className="link-button" type="submit">
              Créer un compte
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LogIn;
