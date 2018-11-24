import React, { Component } from "react";
import "./style.css";

class OffersFilter extends Component {
  handleChange = event => {
    const { name, value } = event.target;

    this.props.updateSearchParams({
      [name]: value,
      skip: 0
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.getOffers();
  };

  render() {
    const { title, priceMin, priceMax, sort } = this.props.searchParams;

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
                  value={title}
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
                    value={priceMin}
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
                    value={priceMax}
                  />
                </div>
              </div>

              <div className="filter-right">
                {" "}
                <button className="btn-search">RECHERCHER</button>
                <select
                  className="select-filter"
                  name="sort"
                  value={sort}
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
