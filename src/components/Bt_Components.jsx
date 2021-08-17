import React, { Component } from "react";
import Headers from "./Header";
import Carousel from "./Carousel";
import ProductList from "./ProductList";
import Footer from "./Footer";

export class Bt_Components extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "Black Berry",
      hinhAnh: "./img/sp_blackberry.png",
      gia: 1000,
    },
    {
      maSP: 2,
      tenSP: "Iphone X",
      hinhAnh: "./img/sp_iphoneX.png",
      gia: 2000,
    },
    { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
    { maSP: 3, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 3000 },
  ];
  render() {
    return (
      <div>
        <Headers />
        <Carousel />
        <ProductList mangSanPham={this.mangSanPham} />
        <Footer />
      </div>
    );
  }
}

export default Bt_Components;
