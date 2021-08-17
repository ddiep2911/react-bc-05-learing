// rce

import React, { Component } from "react";

export class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tuoi: 1,
    };
  }

  /**
   *
   * @getDerivedStateFromProps
   * - dùng để chuyển các props thành state
   * - thường dùng để tính toán dữ liệu trước khi render
   */

  //   ít dùng
  static getDerivedStateFromProps(props, state) {
    const { danhSachKhoaHoc } = props;

    // return về cái gì thì cái đó sẽ lưu vào state
    return {
      danhSachKhoaHoc: danhSachKhoaHoc.filter((khoaHoc) => {
        return danhSachKhoaHoc.soluong >= 20;
      }),
    };
  }

  //   ít dùng
  //   return về true thì chạy xuống render
  // return về false thì ko làm j cả
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>Updating</h2>
        <p>{this.state.tuoi}</p>
        <button
          onClick={() => {
            this.setState({
              tuoi: (this.state.tuoi += 1),
            });
          }}
        >
          {" "}
          +{" "}
        </button>

        <br />

        <button onClick={() => this.forceUpdate()}>Force Update</button>
      </div>
    );
  }

  /**
   * @componentDidUpdate
   * - chạy khi nào : chạy sau render và chỉ khi chạy trong giai đoạn updating
   * - công dụng :  call api , setState
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    // do bị lặp vô tận ( render => componentDidUpdate => setState => render) lên phải có điều kiện dừng
    // thông thường điều kiện dừng sẽ lấy data cũ so sánh với data mới

    if (prevState.tuoi !== this.state.tuoi) {
      //   this.setState({
      //     tuoi: (this.state.tuoi += 1),
      //   });
    }
  }
}

export default Updating;
