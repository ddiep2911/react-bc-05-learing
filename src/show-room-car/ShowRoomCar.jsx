// rce

import React, { Component } from "react";
import ButtonColor from "./ButtonColor";
import Car from "./Car";

export class ShowRoomCar extends Component {
  // Hiển thị hình ảnh mặc định lúc đầu
  state = {
    carImg: "./img/car/products/steel-car.jpg",
    btnColorList: [
      {
        name: "black",
        imgSrc: "./img/car/icons/icon-black.jpg",
      },
      {
        name: "red",
        imgSrc: "./img/car/icons/icon-red.jpg",
      },
      {
        name: "silver",
        imgSrc: "./img/car/icons/icon-silver.jpg",
      },
      {
        name: "steel",
        imgSrc: "./img/car/icons/icon-steel.jpg",
      },
    ],
  };

  //   carImg = "./img/car/products/steel-car.jpg";   //  Vì ko chạy lại render

  handleChoiceColor = (color) => {
    console.log(color);

    switch (color) {
      case "black":
        // this.carImg = "./img/car/products/black-car.jpg";
        this.setState({
          carImg: "./img/car/products/black-car.jpg",
        });
        break;

      case "red":
        // this.carImg = "./img/car/products/red-car.jpg";
        this.setState({
          carImg: "./img/car/products/red-car.jpg",
        });
        break;

      case "silver":
        // this.carImg = "./img/car/products/silver-car.jpg";
        this.setState({
          carImg: "./img/car/products/silver-car.jpg",
        });
        break;

      case "steel":
        // this.carImg = "./img/car/products/silver-car.jpg";
        this.setState({
          carImg: "./img/car/products/steel-car.jpg",
        });
        break;

      default:
        this.carImg = "./img/car/products/steel-car.jpg";
        break;
    }

    console.log(this.carImg);
  };

  renderBtnColorList = () => {
    return this.state.btnColorList.map((btnColor) => {
      return (
        <ButtonColor
          btnColor={btnColor}
          handleChoiceColor={this.handleChoiceColor}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <section className="show-room">
          <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
          <div className="container">
            <div className="chose__color d-flex justify-content-around">
              {this.renderBtnColorList()}
            </div>
            <Car carImg={this.state.carImg} />
          </div>
        </section>
      </div>
    );
  }
}

export default ShowRoomCar;
