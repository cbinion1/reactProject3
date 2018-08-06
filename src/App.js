import React, { Component } from "react";
import "./App.css";
import MainContainer from "./MainContainer/MainContainer.jsx";
import Login from "./Login/Login.jsx";
import { Route, Switch } from "react-router-dom";

const My404 = () => {
  return <div>You done messed up A-A-Ron!!</div>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/comments" component={MainContainer} />
          <Route component={My404} />
        </Switch>
      </div>
    );
  }
}

export default App;
