// rce

import React, { Component } from "react";
import axios from "axios";

class Mouting extends Component {
  // kế thừa lại props từ class Component
  /**
   *
   * @constructor
   * - Chạy : 1 lần duy nhất khi component được gọi
   * - công dụng : khởi tạo state và kế thừa props
   */

  constructor(props) {
    super(props);

    // khởi tạo state
    this.state = {
      lop: "BC05",
      danhSachSanPham: [],
      loading: false, // false là ko load trang , true là sẽ load lại trang
    };

    console.log("constructor");
  }

  /**
   *
   * @render
   * - chạy khi setstate hoặc có props mới
   * - Công dụng : chuyển đổi jsx thành html hiển thị lên màn hình
   */

  render() {
    console.log("render");
    if (this.setState.loading) {
      return <h1>LOADING...</h1>;
    }
    return (
      <div>
        <h2>Mouting</h2>
        {this.state.danhSachSanPham.map((sp, index) => {
          return <li key={index}>{sp.tenSP}</li>;
        })}
      </div>
    );
  }

  /**
   * @componentDidMount
   * - chạy khi nào : chạy sau render và chỉ chạy trong trạng thái mounting
   * - công dụng : dùng dể call api
   */
  componentDidMount() {
    console.log("componentDidMount");

    // bắt đầu load trang
    this.setState({
      loading: true,
    });

    // Tác vụ mất thời gian
    axios({
      method: "GET",
      url: "https://5fb26e6787ed490016ea8e2b.mockapi.io/sanPham",
      data: null,
    })
      .then((res) => {
        this.setState({
          danhSachSanPham: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false, // ngừng load trang
        });
      });
  }
}

export default Mouting;
