import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import ListItems from "../../components/ListItems";
import OffersFilter from "../../components/OffersFilter";
// import Pagination from "../../components/Pagination";

const items_per_page = 25;

class Home extends Component {
  state = {
    offers: [],
    searchParams: {
      title: "",
      priceMin: "",
      priceMax: "",
      sort: "price-desc",
      skip: 0,
      limit: items_per_page
    }
  };

  updateOffersList = offers => {
    this.setState({
      offers: offers,
      offersCount: 0
    });
  };

  render() {
    return (
      <div className="bg-color">
        <OffersFilter updateOffersList={this.updateOffersList} />
        <ListItems list={this.state.offers} />
        {/* <Pagination /> */}
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer/with-count")
      .then(response => {
        this.setState({
          offers: response.data.offers,
          offersCount: response.data
        });
        console.log(this.state.offers);
      });
  }
}

export default Home;
