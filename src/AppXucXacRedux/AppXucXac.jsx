// rce

import React, { Component } from "react";
import BanChoi from "./BanChoi";
import BtnPlay from "./BtnPlay";
import KetQua from "./KetQua";
import "./style.scss";

const getInRandom = () => {
  // tạo ra các con số ngẫu nhiên từ 0 - 5
  return Math.floor(Math.random() * 6);
};

export class AppXucXac extends Component {
  xucXacMau = [
    {
      imgSrc: "./img/gameXucXac/1.png",
      diem: 1,
    },
    {
      imgSrc: "./img/gameXucXac/2.png",
      diem: 2,
    },
    {
      imgSrc: "./img/gameXucXac/3.png",
      diem: 3,
    },
    {
      imgSrc: "./img/gameXucXac/4.png",
      diem: 4,
    },
    {
      imgSrc: "./img/gameXucXac/5.png",
      diem: 5,
    },
    {
      imgSrc: "./img/gameXucXac/6.png",
      diem: 6,
    },
  ];

  state = {
    banChon: true, // true là tài , false là xỉu
    soBanThang: 0,
    soBanChoi: 0,
    xucXacs: [
      {
        imgSrc: "./img/gameXucXac/1.png",
        diem: "1",
      },
      {
        imgSrc: "./img/gameXucXac/2.png",
        diem: "2",
      },
      {
        imgSrc: "./img/gameXucXac/6.png",
        diem: "6",
      },
    ],
  };

  handelPlayGame = () => {
    let count = 1;

    const lacXucXac = setInterval(() => {
      const xucXacs = [
        this.xucXacMau[getInRandom()],
        this.xucXacMau[getInRandom()],
        this.xucXacMau[getInRandom()],
      ];

      this.setState({
        // xucXacs: xucXacs,
        xucXacs,
      });

      count += 1;
      if (count > 10) {
        clearInterval(lacXucXac); // Dừng interval
        /**
         * các bước tính điểm"
         * - b1/ cần mảng xucXacs tính tổng số điểm ( tài hay xỉu )
         * - b2/ cần lấy ra cái mình chọn
         * -b3/ so sanhs va tinh diem
         * */

        let { xucXacs, banChon, soBanThang, soBanChoi } = this.state;
        const tongDiem = xucXacs.reduce((tongSoDiem, item) => {
          return (tongSoDiem += item.diem);
        }, 0);

        let ketQua;
        if (tongDiem >= 11) {
          ketQua = true;
        } else {
          ketQua = false;
        }

        if (banChon === ketQua) {
          this.setState({
            soBanThang: (soBanThang += 1),
            soBanChoi: (soBanChoi += 1),
          });
        } else {
          this.setState({
            soBanChoi: (soBanChoi += 1),
          });
        }
      }
    }, 100);
  };

  handelTaiXiu = (taiOrXiu) => {
    this.setState({
      banChon: taiOrXiu,
    });
  };

  render() {
    // const banChon = this.state.banChon;
    // const soBanThang = this.state.soBanThang;
    // const soBanChoi = this.state.soBanChoi;

    const { banChon, soBanThang, soBanChoi, xucXacs } = this.state;

    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>

          {/* Bàn chơi  */}
          <BanChoi
          // handelTaiOrXiu={this.handelTaiXiu}
          // xucXacs={xucXacs}
          />
        </div>

        {/* Kết quả */}
        <KetQua
        // banChon={banChon}
        // soBanThang={soBanThang}
        // soBanChoi={soBanChoi}
        />

        {/* Btnplay  */}
        <div className="text-center">
          <BtnPlay
          //  handelPlayGame={this.handelPlayGame}
          />
        </div>
      </div>
    );
  }
}

export default AppXucXac;
