import React from "react";
import ToggleDisplay from "react-toggle-display";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <form id="application-input">
          <label>Apply Here: </label>
          <br />
          <textarea id="application-text" rows="8" cols="100" />
          <br />
          <input id="submit" type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} />
        </form>
        <ToggleDisplay show={this.state.show} tag="p" id="message">
          Your application was submitted!
        </ToggleDisplay>
        <ToggleDisplay hide={this.state.show} tag="p" id="message">
          &nbsp;
        </ToggleDisplay>
      </div>
    );
  }
}
