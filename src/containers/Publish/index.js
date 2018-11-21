import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Publish extends Component {
  state = {
    title: "",
    description: "",
    price: ""
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(
        "https://leboncoin-api.herokuapp.com/api/offer/publish",
        {
          title: this.state.title,
          description: this.state.description,
          price: Number(this.state.price)
        },
        {
          headers: {
            authorization: "Bearer " + this.props.user.token
          }
        }
      )
      .then(response => {
        console.log(response.data);

        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div className="bg">
        <div className="publish-container">
          <div className="annonce">
            <p>Votre annonce</p>
          </div>
          <form className="publish-form" onSubmit={this.onSubmit}>
            <div className="annonce-container">
              <div className="annonce-description">
                <label className="title" htmlFor="title">
                  Titre de l'annonce
                </label>
                <input
                  className="containt"
                  id="title"
                  name="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <label className="title">Texte de l'annonce</label>
                <textarea
                  className="containt"
                  rows="10"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
                <label className="title">Prix</label>
                <input
                  className="containt"
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button className="publish-btn" type="submit">
              Valider
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Publish;
