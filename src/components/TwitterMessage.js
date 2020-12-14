import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = e => {
    // console.log(e.target.value)
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessage} />
        <h4>Remaining Characters: {this.props.maxChars - this.state.message.length}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
