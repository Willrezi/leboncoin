import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Items extends Component {
  renderImage() {
    if (this.props.pictures[0]) {
      return (
        <img
          className="img-container"
          src={this.props.pictures[0].secure_url}
          alt=""
        />
      );
    } else {
      return <div className="img-container" />;
    }
  }

  render() {
    return (
      <Link
        to={{
          pathname: "/offer/" + this.props.id
          //   name: this.props.name,
          //   pictures: this.props.pictures
        }}
      >
        <div className="item-container">
          {this.renderImage()}
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
