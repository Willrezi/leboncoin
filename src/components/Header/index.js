import React, { Component, Fragment } from "react";
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
                  <li>Offres</li>
                </ul>
              </div>
              <div className="menu-right" />
              <ul>
                <li>Créer un compte</li>
                <li>Se connecter</li>
              </ul>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
