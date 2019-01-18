import React, { Component } from "react";
import MainLayout from "./layout/Layout";
import Header from "./layout/Header";
import "./App.css";

class App extends Component {
  render() {
    return <MainLayout header={<Header />}>Testing</MainLayout>;
  }
}

export default App;
