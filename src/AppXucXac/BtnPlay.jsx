// rce

import React, { Component } from "react";

export class BtnPlay extends Component {
  handelPlay = () => {
    const { handelPlayGame } = this.props;
    handelPlayGame();
  };
  render() {
    return (
      <button
        onClick={this.handelPlay}
        className="btn btn-success"
        style={{ fontSize: 30 }}
      >
        PLAY GAME
      </button>
    );
  }
}

export default BtnPlay;
