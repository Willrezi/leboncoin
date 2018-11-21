import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
import logoLeboncoin from "../../assets/logo.svg";

class Header extends Component {
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
                  <li>Déposer une annonce</li>
                  <li>Offres</li>
                </ul>
              </div>
              <div className="menu-right">
                <ul>
                  <li
                    onClick={() => {
                      this.props.history.push("/sign_up");
                    }}
                  >
                    Créer un compte
                  </li>
                  <li
                    onClick={() => {
                      this.props.history.push("/log_in");
                    }}
                  >
                    Se connecter
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default withRouter(Header);
