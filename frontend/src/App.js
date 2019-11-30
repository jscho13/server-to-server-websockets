import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("seq-num", (msg) => console.info(msg));
  }

  render() {
    return (
        <div style={{ textAlign: "center" }}>
          I've loaded!
        </div>
    );
  }
}

export default App;
