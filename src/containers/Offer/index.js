import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Offer extends Component {
  state = {
    offer: []
  };

  renderImage() {
    if (this.state.offer.pictures[0]) {
      return (
        <img
          className="img-offer"
          src={this.state.offer.pictures[0].secure_url}
          alt=""
        />
      );
    } else {
      return <div className="img-offer">image</div>;
    }
  }

  render() {
    if (this.state.offer.creator === undefined) {
      return null;
    } else {
      // const {title, price} = this.state

      return (
        <div className="offer-bg-color">
          {/* <span>ID de l'annonce : {this.props.match.params.id}</span> */}
          <div className="offer-container">
            <div className="left-container">
              <div className="offer-card">
                <div className="img-offer">{this.renderImage()}</div>
                <div className="offer-card-footer">
                  <h3 className="offer-title">{this.state.offer.title}</h3>
                  <span className="offer-price">
                    {this.state.offer.price + " €"}
                  </span>
                </div>
              </div>

              <div>
                <h4>Description</h4>

                {this.state.offer.description}
              </div>
            </div>
            <div className="right-container">
              <div className="offer-username">
                <i className="fas fa-user-circle fa-4x" />
                <p>{this.state.offer.creator.account.username}</p>
                {/* {this.props.location.name} */}
              </div>
              <button className="phone">
                <i className="fas fa-phone" />
                <p className="see-phone">Voir le numéro</p>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    axios
      .get(
        // "https://leboncoin-api.herokuapp.com/api/offer/" +
        //   this.props.match.params.id
        `https://leboncoin-api.herokuapp.com/api/offer/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        this.setState({
          offer: response.data
        });
        console.log(this.state.offer);
      });
  }
}

export default Offer;
