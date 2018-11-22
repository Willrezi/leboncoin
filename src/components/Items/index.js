import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Items extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: "/offer/" + this.props.id,
          name: this.props.name,
          pictures: this.props.pictures
        }}
      >
        <div className="item-container">
          <img className="img-container" src={this.props.pictures} alt="" />
          <div>
            <h4 className="item-description">{this.props.label}</h4>
            <span className="item-price">{this.props.price + "€"}</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default Items;
