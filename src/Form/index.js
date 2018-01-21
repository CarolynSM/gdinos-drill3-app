import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <form id="application-input">
        <label>Apply Here: </label>
        <textarea id="application-text" rows="8" cols="100" />
        <input id="submit" type="submit" value="Submit" />
      </form>
    );
  }
}
