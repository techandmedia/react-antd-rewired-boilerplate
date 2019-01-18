import React, { Component } from "react";
import MainLayout from "./layout/Layout";
import Header from "./layout/Header";
import "./App.css";

class App extends Component {
  state = {
    siderStatus: "header"
  };

  // Ini fungsi supaya pada saat lebar layar kurang dari 415px
  // dan tombol collapsed nya ditekan, maka title{display: none}
  onSiderChange = event => {
    const screenWidth = window.innerWidth;
    if (!event && screenWidth < 415) {
      this.setState({
        siderStatus: "smaller-header"
      });
    } else {
      this.setState({
        siderStatus: "header"
      });
    }
  };

  render() {
    const { siderStatus } = this.state;
    return (
      <MainLayout
        onSiderChange={this.onSiderChange}
        header={<Header siderStatus={siderStatus} />}
      >
        Testing
      </MainLayout>
    );
  }
}

export default App;
