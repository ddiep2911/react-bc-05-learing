// rce

import React, { Component } from "react";

export class UnMounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>UnMounting</h2>
        <b> count: {this.state.count}</b>
      </div>
    );
  }

  componentDidMount() {
    this.counter = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  /**
   * @componentWillUnmount
   * - chạy khi : component bị cắt khỏi cây DOM của Reactjs
   * - Công dụng : dùng để dọn dẹp 1 số hàm trước khi component rời khỏi cây DOM
   */
  componentWillUnmount() {
    clearInterval(this.counter);
  }
}

export default UnMounting;
