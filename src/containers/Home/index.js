import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import ListItems from "../../components/ListItems";
import OffersFilter from "../../components/OffersFilter";
import Pagination from "../../components/Pagination";

const ITEMS_PER_PAGE = 25;

class Home extends Component {
  state = {
    offers: [],
    offersCount: 0,
    searchParams: {
      title: "",
      priceMin: "",
      priceMax: "",
      sort: "price-desc",
      skip: 0,
      limit: ITEMS_PER_PAGE
    }
  };

  updateSearchParams = (newSearchParams, callbackFunction) => {
    this.setState(
      {
        searchParams: {
          ...this.state.searchParams, // Je récupère toutes les anciennes valeurs des paramètres de recherche
          ...newSearchParams // J'écrase les anciennes valeurs avec les nouvelles valeurs
        }
      },
      callbackFunction
    );
  };

  getOffers = () => {
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer/with-count", {
        params: this.state.searchParams
      })
      .then(response => {
        this.setState({
          offers: response.data.offers,
          offersCount: response.data.count
        });
      });
  };

  render() {
    return (
      <div className="bg-color">
        <OffersFilter
          searchParams={this.state.searchParams}
          updateSearchParams={this.updateSearchParams}
          getOffers={this.getOffers}
        />
        <ListItems list={this.state.offers} />
        <Pagination
          skip={this.state.searchParams.skip}
          updateSearchParams={this.updateSearchParams}
          getOffers={this.getOffers}
        />
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
