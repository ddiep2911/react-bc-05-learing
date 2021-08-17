// rce

import React, { Component } from "react";
import { connect } from "react-redux";
import { xuLyBanChonAction } from "../redux/action/xucXacAction";

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

const mapDispatToProps = (dispatch) => {
  return {
    handleTaiOrXiu: (taiOrXiu) => {
      dispatch(xuLyBanChonAction(taiOrXiu));
    },
  };
};

export default connect(null, mapDispatToProps)(BtnTaiXiu);
