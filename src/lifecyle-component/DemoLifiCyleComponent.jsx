// rce

import React, { Component } from "react";
import Mouting from "./Mouting";
import UnMounting from "./UnMounting";
import Updating from "./Updating";

export class DemoLifiCyleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onOrOff: false,
      danhSachKhoaHoc: [
        {
          ten: "Reactjs",
          soLuong: 16,
        },
        {
          ten: "Nodejs",
          soLuong: 20,
        },
        {
          ten: "Vuejs",
          soLuong: 25,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Demo LifiCyle Component</h1>

        {/* <Mouting /> */}

        <Updating danhSachKhoaHoc={this.state.danhSachKhoaHoc} />

        {this.state.onOrOff ? <UnMounting /> : null}

        <button
          onClick={() => {
            this.setState({
              onOrOff: !this.state.onOrOff,
            });
          }}
        >
          onOrOff
        </button>
      </div>
    );
  }
}

export default DemoLifiCyleComponent;
