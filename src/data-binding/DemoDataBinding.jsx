// rce : Tạo nhanh 1 class

import React, { Component } from "react";

export class DemoDataBinding extends Component {
  ten = "ronaldo";
  soAo = 7;

  renderInfo = () => {
    return (
      <div>
        <p>tên : {this.ten} </p>
        <p>số áo : {this.soAo} </p>
      </div>
    );
  };

  render() {
    const hinhAnh =
      "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.baodongnai.com.vn%2Fdong-nai-cuoi-tuan%2F202002%2Fcr7-35-2986945%2F&psig=AOvVaw1nzIbM9tYyxpje43As305t&ust=1618314947442000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCYjI7T-O8CFQAAAAAdAAAAABAI";
    return (
      <div>
        <h1>Demo data binding</h1>

        {this.renderInfo()}

        <img src={hinhAnh} alt="" />
      </div>
    );
  }
}

export default DemoDataBinding;
