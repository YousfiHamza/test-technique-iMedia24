import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./views/home/home.component";
import Types from "./views/types/types.component";
import Details from "./views/details/details.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-container">
          <Switch>
            <Route path="/types/:type" component={Types} />
            <Route path="/details/:id" component={Details} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
