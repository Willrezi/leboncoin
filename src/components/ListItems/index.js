import React, { Component } from "react";
import Items from "../../components/Items";
import "./style.css";

class ListItems extends Component {
  render() {
    let listItems = [];

    for (let i = 0; i < this.props.list.length; i++) {
      listItems.push(
        <Items
          key={i}
          label={this.props.list[i].title}
          price={this.props.list[i].price}
          pictures={this.props.list[i].pictures}
          id={this.props.list[i]._id}
          name={this.props.list[i].creator.account.username}
          phone={this.props.list[i].creator.account.phone}
        />
      );
    }
    console.log(listItems);
    return <div className="list-container">{listItems}</div>;
  }
}

export default ListItems;
