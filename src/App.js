import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Details from "./Job-Details";
import Form from "./Form";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Details />
          <Form />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;