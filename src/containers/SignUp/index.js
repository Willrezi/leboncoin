import React, { Component, Fragment } from "react";
import axios from "axios";
import "./style.css";

class SignUp extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };
  onSubmit = event => {
    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/sign_up", {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        confirmedPassword: this.state.confirmedPassword
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
    console.log(this.props.logIn);
  };

  render() {
    return (
      <div className="container">
        <div className="sign-up-form">
          <h2 className="sign-up-title">Créez un compte</h2>
          <form onSubmit={this.onSubmit}>
            <div className="sign-up-input">
              <label>Pseudo</label>
              <input
                type="text"
                placeholder=""
                onChange={event => {
                  this.setState({ username: event.target.value });
                }}
                value={this.state.username}
              />
            </div>
            <div className="sign-up-input">
              <label>Adresse email</label>
              <input
                type="text"
                placeholder=""
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
                value={this.state.email}
              />
            </div>
            <div className="sign-up-password">
              <div className="left">
                {" "}
                <label>Mot de passe</label>
                <input
                  type="password"
                  placeholder=""
                  onChange={event => {
                    this.setState({ password: event.target.value });
                  }}
                  value={this.state.password}
                />
              </div>

              <div className="right">
                <label>Confirmer le mot de passe</label>
                <input
                  type="password"
                  placeholder=""
                  onChange={event => {
                    this.setState({
                      confirmedPassword: event.target.value
                    });
                  }}
                  value={this.state.confirmedPassword}
                />
              </div>
            </div>
            <div className="sign-up-checkbox">
              <input type="checkbox" />
              <label>"J'accepte les Conditions Générales de Vente"</label>
            </div>
            <button className="sign-up-button" type="submit">
              Créer mon Compte Personnel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
