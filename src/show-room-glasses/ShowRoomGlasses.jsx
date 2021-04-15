// rce

import React, { Component } from "react";

export class ShowRoomGlasses extends Component {
  // Hiển thị hình ảnh mặc định lúc đầu
  state = { carImg: "./img/glassesImage/v1.png" };

  //   carImg = "./img/glassesImage/v1.png";

  handleChoiceColor = (color) => {
    console.log(color);

    switch (color) {
      case "v1":
        // this.carImg = "./img/glassesImage/v1.png";

        this.setState({
          carImg: "./img/glassesImage/v1.png",
        });
        break;

      case "v2":
        this.setState({
          carImg: "./img/glassesImage/v2.png",
        });
        break;

      case "v3":
        this.setState({
          carImg: "./img/glassesImage/v3.png",
        });
        break;

      case "v4":
        this.setState({
          carImg: "./img/glassesImage/v4.png",
        });
        break;

      case "v5":
        this.setState({
          carImg: "./img/glassesImage/v5.png",
        });
        break;

      case "v6":
        this.setState({
          carImg: "./img/glassesImage/v6.png",
        });
        break;

      case "v7":
        this.setState({
          carImg: "./img/glassesImage/v7.png",
        });
        break;

      case "v8":
        this.setState({
          carImg: "./img/glassesImage/v8.png",
        });
        break;

      case "v9":
        this.setState({
          carImg: "./img/glassesImage/v9.png",
        });
        break;

      default:
        this.carImg = "./img/glassesImage/v1.png";
        break;
    }
  };

  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <section className="model d-flex justify-content-center col-5">
                <div
                  className="card text-left"
                  style={{ width: 300, position: "relative" }}
                >
                  <img
                    className="card-img-top"
                    src={"./img/glassesImage/model.jpg"}
                    alt="hinh model"
                  />
                  <img
                    src={this.state.carImg}
                    alt="kinh"
                    style={{
                      width: 170,
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "16%",
                    }}
                  />
                  <div className="card-body">
                    <span className="card-title badge-danger h3 px-2 rounded">
                      $30
                    </span>
                    <p className="card-text mt-2">FENDI F4300</p>
                  </div>
                </div>
              </section>
              <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceColor("v1")}
                  >
                    <img
                      src="./img/glassesImage/v1.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceColor("v2")}
                  >
                    <img
                      src="./img/glassesImage/v2.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceColor("v3")}
                  >
                    <img
                      src="./img/glassesImage/v3.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceColor("v4")}
                  >
                    <img
                      src="./img/glassesImage/v4.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceColor("v5")}
                  >
                    <img
                      src="./img/glassesImage/v5.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceColor("v6")}
                  >
                    <img
                      src="./img/glassesImage/v6.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceColor("v7")}
                  >
                    <img
                      src="./img/glassesImage/v7.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceColor("v8")}
                  >
                    <img
                      src="./img/glassesImage/v8.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceColor("v9")}
                  >
                    <img
                      src="./img/glassesImage/v9.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ShowRoomGlasses;
