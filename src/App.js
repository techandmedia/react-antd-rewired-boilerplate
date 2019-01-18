import React, { Component } from "react";
import MainLayout from "./layout/Layout";
import Header from "./layout/Header";
import "./App.css";

class App extends Component {
  state = {
    siderStatus: "header"
  };

  onSiderChange = event => {
    if (!event) {
      console.log(event);
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
    console.log(siderStatus);
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
