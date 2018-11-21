import React, { Component, Fragment } from "react";
import "./style.css";
import axios from "axios";
import ListItems from "../../components/ListItems";

class Home extends Component {
  state = {
    offers: []
  };
  render() {
    return (
      <div className="bg-color">
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
