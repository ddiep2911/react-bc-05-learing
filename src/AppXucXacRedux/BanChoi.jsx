// rce

import React, { Component } from "react";
import BtnTaiXiu from "./BtnTaiXiu";
import XucXac from "./XucXac";
import { connect } from "react-redux";

export class BanChoi extends Component {
  renderDanhSachXucXac = () => {
    const { xucXacs } = this.props;
    return xucXacs.map((item) => {
      return <XucXac item={item} />;
    });
  };

  render() {
    const { handelTaiOrXiu } = this.props;
    return (
      <div className="row text-center">
        <div className="col-4">
          <BtnTaiXiu
            // handleTaiOrXiu={handelTaiOrXiu}
            taiOrXiu={true}
          />
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {/* Xúc Xắc  */}
            {this.renderDanhSachXucXac()}
          </div>
        </div>
        <div className="col-4">
          <BtnTaiXiu
            // handleTaiOrXiu={handelTaiOrXiu}
            taiOrXiu={false}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucXacs: state.xucXac.xucXacs,
  };
};

export default connect(mapStateToProps)(BanChoi);
