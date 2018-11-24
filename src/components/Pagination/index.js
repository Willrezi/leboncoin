import React, { Component } from "react";
/* import "./style.css"; */

class Pagination extends Component {
  getPreviousPage = () => {
    if (this.props.skip > 0) {
      this.props.updateSearchParams(
        {
          skip: this.props.skip - 25
        },
        this.props.getOffers
      );
    }
  };

  getNextPage = () => {
    this.props.updateSearchParams(
      {
        skip: this.props.skip + 25
      },
      this.props.getOffers
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.getPreviousPage}>Page précédente</button>
        <button onClick={this.getNextPage}>Page suivante</button>
      </div>
    );
  }
}

export default Pagination;
