import React, { Component } from "react";
import "./style.css";

class Items extends Component {
  render() {
    return (
      <div className="item-container">
        <img className="img-container" src={this.props.pictures} alt="" />
        <div>
          <h4 className="item-description">{this.props.label}</h4>
          <span className="item-price">{this.props.price + "€"}</span>
        </div>
      </div>
    );
  }
}

export default Items;
