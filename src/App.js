import React, { Component } from "react";
import Antet from "./antet";
import Nav from "./nav";
import Home from "./home";
import Noutati from "./noutati";
import Contact from "./contact";
import Despre from "./despre";
import Notfound from "./notfound";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    const stil = {
      backgroundColor: "#e9ecef",
      height: "100vh"
    };

    return (
      <div className="container">
        <Antet />
        <div className="row mr-0 ml-0">
          <div className="col" style={stil}>
            <Nav />
          </div>
          <div className="col-9">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/noutati" component={Noutati} />
              <Route path="/contact" component={Contact} />
              <Route path="/despre" component={Despre} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
