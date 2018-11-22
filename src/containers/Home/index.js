import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import ListItems from "../../components/ListItems";
import OffersFilter from "../../components/OffersFilter";

class Home extends Component {
  state = {
    offers: []
  };

  updateOffersList = offers => {
    this.setState({
      offers: offers
    });
  };

  render() {
    return (
      <div className="bg-color">
        <OffersFilter updateOffersList={this.updateOffersList} />
        <ListItems list={this.state.offers} />
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer")
      .then(response => {
        this.setState({
          offers: response.data
        });
        console.log(this.state.offers);
      });
  }
}

export default Home;
