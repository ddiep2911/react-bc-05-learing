// rce

import React, { Component } from "react";

// B1:
import { connect } from "react-redux";

export class Hero extends Component {
  handelUpLevel = () => {
    const { tangCapDo } = this.props;
    tangCapDo();
  };

  //   doiHinhAnh = () => {
  //     const { doiHinhAnh } = this.props;
  //     doiHinhAnh();
  //   };

  render() {
    console.log("props: ", this.props);
    // console.log("props: ", this.props);

    const { tenViTuong, capDo, hinhAnh } = this.props;
    return (
      <div>
        <h1>Name: {tenViTuong} </h1>
        <h2>Level: {capDo}</h2>
        <button className="btn btn-info" onClick={this.handelUpLevel}>
          Tăng level
        </button>
        <div className="mt-2">
          <img src={hinhAnh} alt="" width="400px" />
        </div>

        <button className="btn btn-danger mt-2" onClick={this.props.doiHinhAnh}>
          Đổi Hình
        </button>
      </div>
    );
  }
}

// Chuyển đổi những state trên store thành các props của component
const mapStateToProp = (state) => {
  console.log("state: ", state);

  return {
    //   key là props của component : value là state (dữ liệu lưu trên store)
    tenViTuong: state.hero.name, // yone
    capDo: state.hero.level,
    hinhAnh: state.hero.image,
  };
};

// phương thức giúp cập nhật lại state ở trên store
const mapDispatchToProps = (dispatch) => {
  return {
    //   key là props của component : value là phương thức giúp chúng ta gửi data lên store (dữ liệu lưu trên store)
    tangCapDo: () => {
      // action chịu trách nhiệm mô tả công việc sắp sử lý trên store
      const action = {
        //   luôn có 1 type
        type: "TANG_CAP_DO",
      };

      //   gửi action lên store
      dispatch(action);
    },

    doiHinhAnh: () => {
      // action chịu trách nhiệm mô tả công việc sắp sử lý trên store
      const action = {
        type: "DOI_HINH_ANH",
        payload: {
          image: "https://pbs.twimg.com/media/EexUTq5WAAAMMbi.png",
        },
      };

      //   gửi action lên store
      dispatch(action);
    },
  };
};

// B2:
export default connect(mapStateToProp, mapDispatchToProps)(Hero);
