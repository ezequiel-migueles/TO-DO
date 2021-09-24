import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./Main.css";
import Todo from "../Todo";
import Weather from "../Weather";
import Home from "../Home";
import Error from "../Error";
class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/todo" component={Todo} />
        <Route path="/weather" component={Weather} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default Main;
