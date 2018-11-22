import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class OffersFilter extends Component {
  state = {
    title: "",
    priceMin: "",
    priceMax: "",
    sort: "price-desc" || "price-asc" || "date-desc" || "date-asc",
    skip: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    const { title, priceMin, priceMax, sort, skip, limit } = this.state;
    event.preventDefault();
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer", {
        params: {
          title: title,
          priceMin: priceMin,
          priceMax: priceMax,
          sort: sort,
          skip: skip,
          limit: limit
        }
      })
      .then(response => {
        this.props.updateOffersList(response.data);
        console.log(response.data);
      });
  };

  render() {
    return (
      <div className="offers-filter-bg">
        <div className="filter-container">
          <form className="filter-form" onSubmit={this.onSubmit}>
            <div className="filter">
              <div className="filter-left">
                <input
                  id="title"
                  name="title"
                  placeholder="Que recherchez-vous ?"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
                <div className="filter-price">
                  <label htmlFor="price">
                    <span className="filter-price-left">Prix entre</span>
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="priceMin"
                    placeholder="Prix min"
                    onChange={this.handleChange}
                    value={this.state.priceMin}
                  />

                  <label htmlFor="price-max">
                    <span className="filter-price-right">et</span>
                  </label>
                  <input
                    type="text"
                    id="price-max"
                    name="priceMax"
                    placeholder="Prix max"
                    onChange={this.handleChange}
                    value={this.state.priceMax}
                  />
                </div>
              </div>

              <div className="filter-right">
                {" "}
                <button className="btn-search">RECHERCHER</button>
                <select
                  className="select-filter"
                  name="sort"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="date-desc">Tri : Plus récentes</option>
                  <option value="date-asc">Tri : Plus anciennes</option>
                  <option value="price-asc">Tri : Prix croissants</option>
                  <option value="price-desc">Tri : Prix décroissants</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default OffersFilter;
