// rce

import React, { Component } from "react";
import { connect } from "react-redux";

export class BtnPlay extends Component {
  handelPlay = () => {
    const { lacXucXac, tinhKetQua } = this.props;

    let count = 1;
    const thoiGianLac = setInterval(() => {
      lacXucXac();

      count++;
      if (count >= 10) {
        clearInterval(thoiGianLac);

        // Tính kết quả
        tinhKetQua();
      }
    }, 100);
  };
  render() {
    return (
      <button
        onClick={this.handelPlay}
        className="btn btn-success"
        style={{ fontSize: 30 }}
      >
        PLAY GAME
      </button>
    );
  }
}

const mapDispatToProps = (dispatch) => {
  return {
    lacXucXac: () => {
      const action = {
        type: "LAC_XUC_XAC",
      };

      dispatch(action);
    },
    tinhKetQua: () => {
      const action = {
        type: "TINH_KET_QUA",
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatToProps)(BtnPlay);
