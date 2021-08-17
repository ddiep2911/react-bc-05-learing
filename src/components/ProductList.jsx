// rcc

import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  renderSanPham = () => {
    let { mangSanPham } = this.props;
    return mangSanPham.map((sp, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem sanPham={sp} />
        </div>
      );
    });
  };

  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">{this.renderSanPham()}</div>
      </section>
    );
  }
}

export default ProductList;
