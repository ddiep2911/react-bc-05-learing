// rce

import React, { Component } from "react";
import { connect } from "react-redux";

export class KetQua extends Component {
  render() {
    return (
      <div className="container text-center display-4">
        <div>
          bạn chọn :{" "}
          <span className="text-danger">
            {this.props.banChon ? "Tài" : "Xỉu"}
          </span>
        </div>
        <div>
          số bàn thắng :{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi :{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

// Chuyển đổi những state trên store thành các props của component
const mapStateToProp = (state) => {
  // console.log("state: ", state);

  return {
    //   key là props của component : value là state (dữ liệu lưu trên store)
    banChon: state.xucXac.banChon,

    soBanThang: state.xucXac.soBanThang,

    soBanChoi: state.xucXac.soBanChoi,
  };
};

export default connect(mapStateToProp)(KetQua);
