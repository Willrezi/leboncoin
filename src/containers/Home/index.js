import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import ListItems from "../../components/ListItems";
import OffersFilter from "../../components/OffersFilter";
import Pagination from "../../components/Pagination";

const items_par_page = 25;

class Home extends Component {
  state = {
    offers: [],
    page: 1,
    skip: 0,
    limit: items_par_page
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
        <Pagination />
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer", {
        params: {
          limit: items_par_page
        }
      })
      .then(response => {
        this.setState({
          offers: response.data
        });
        console.log(this.state.offers);
      });
  }
}

export default Home;
