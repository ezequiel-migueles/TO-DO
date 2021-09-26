import React, { Component } from "react";
import img from "../../assets/img/do-list-icon-png.png";

class Home extends Component {
  render() {
    return (
      <main>
        <h1>Welcome to the App!</h1>
        <img src={img} alt='Logo'/>
      </main>
    );
  }
}

export default Home;
