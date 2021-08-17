// rce

import React, { Component } from "react";

export class BtnTaiXiu extends Component {
  handelChoiceTaiOrXiu = (taiOrXiu) => {
    const { handleTaiOrXiu } = this.props;
    handleTaiOrXiu(taiOrXiu);
    // console.log(taiOrXiu);
  };

  render() {
    const { taiOrXiu } = this.props;
    return (
      <button
        onClick={() => this.handelChoiceTaiOrXiu(taiOrXiu)}
        className={`${
          taiOrXiu ? "bg-danger" : "bg-dark"
        } display-4 p-5 text-light`}
      >
        {taiOrXiu ? "Tài" : "Xỉu"}
      </button>
    );
  }
}

export default BtnTaiXiu;
