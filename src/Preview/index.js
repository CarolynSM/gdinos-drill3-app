import React from "react";
import ToggleDisplay from "react-toggle-display";

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showPreview(event) {
    event.preventDefault();
    document.querySelector("#application-preview").textContent = document.querySelector(
      "#application-text"
    ).value;
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <button id="preview-toggle" onClick={this.showPreview.bind(this)}>
          Show Preview
        </button>
        <ToggleDisplay show={this.state.show} tag="section" id="application-preview">
          Test
        </ToggleDisplay>
      </div>
    );
  }
}
