import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class SignUp extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    confirmedPassword: "",
    errorMessage: "",
    passwordIncorrect: false
  };
  onSubmit = event => {
    if (this.state.password === this.state.confirmedPassword) {
      axios
        .post("https://leboncoin-api.herokuapp.com/api/user/sign_up", {
          email: this.state.email,
          username: this.state.username,
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
      //   event.preventDefault();
    } else {
      //   alert("Les mots des passes ne correspondent pas");
      this.setState({
        errorMessage: "les mots de passe ne sont pas identiques"
      });
    }
    event.preventDefault();
  };

  renderError() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    } else {
      return null;
    }
  }

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
                required
                onChange={event => {
                  this.setState({ username: event.target.value });
                }}
                value={this.state.username}
              />
            </div>
            <div className="sign-up-input">
              <label>Adresse email</label>
              <input
                type="email"
                required
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
                value={this.state.email}
              />
            </div>
            <div className="sign-up-password">
              <div className="left">
                {" "}
                <label htmlFor="password">Mot de passe</label>
                {/* htmlFor doit correspondre à l'id */}
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={event => {
                    this.setState({ password: event.target.value });
                  }}
                  value={this.state.password}
                />
              </div>

              <div className="right">
                <label>Confirmer le mot de passe</label>
                <input
                  id="confirmedPassword"
                  name="confirmedPassword"
                  type="password"
                  required
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
              <input type="checkbox" required />
              <label>"J'accepte les Conditions Générales de Vente"</label>
            </div>
            <div className="messageerror">{this.renderError()}</div>
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
