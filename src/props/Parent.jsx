// rce

import React, { Component } from "react";
import Child from "./Child";
import ChildFunction from "./ChildFunction";

export class Parent extends Component {
  state = {
    hero: {
      name: "iron Man",
      say: "I love 3000",
    },
  };

  render() {
    return (
      <div>
        <h1>Parent</h1>

        <Child tenAnhHung={this.state.hero.name}>
          <img
            src="https://blogvn.org/wp-content/uploads/2020/04/vi-sao-khong-the-cap-nhat-icon-om-trai-tim-tren-facebook.jpg"
            alt=""
          />

          <h1>ABC</h1>
        </Child>

        <ChildFunction cauNoi={this.state.hero.say}></ChildFunction>
      </div>
    );
  }
}

export default Parent;
