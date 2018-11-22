import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
import logoLeboncoin from "../../assets/logo.svg";

class Header extends Component {
  onLogOut = event => {
    this.props.logOut();
    this.props.history.push("/");
    event.preventDefault();
    console.log(this.onLogout);
  };

  renderNav() {
    if (this.props.user._id) {
      return (
        <Fragment>
          <li
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            {this.props.user.username}
          </li>
          <li onClick={this.onLogOut}>Déconnexion</li>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <li onClick={() => this.props.history.push("/sign_up")}>
          Créer un compte
        </li>
        <li onClick={() => this.props.history.push("/log_in")}>Se connecter</li>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        <header>
          <div className="container">
            <div className="logo">
              <img src={logoLeboncoin} alt="" />
            </div>
            <div className="menu">
              <div className="menu-left">
                <ul>
                  <li
                    onClick={() => {
                      this.props.history.push("/publish");
                    }}
                  >
                    Déposer une annonce
                  </li>
                  <li
                    onClick={() => {
                      this.props.history.push("/");
                    }}
                  >
                    Offres
                  </li>
                </ul>
              </div>
              <div className="menu-right">
                <ul>{this.renderNav()}</ul>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default withRouter(Header);
