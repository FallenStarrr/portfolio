import React, { Component } from "react";
import "./Message.scss";

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    this.state = {
      message: temp
    };
    console.log("STATE", this.state.message.Body)
  }

  render() {
    return <div className="Message">{this.state.message.Body}</div>;
  }
}

export default Message;