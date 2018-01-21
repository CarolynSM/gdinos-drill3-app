import React from "react";

export default class Preview extends React.Component {
  displayMessage() {
    return;
  }
  render() {
    return (
      <div>
        <button id="preview-toggle">Show Preview</button>
        <section id="application-preview" className="hidden" />
      </div>
    );
  }
}
