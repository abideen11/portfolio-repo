import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

import ReactGA from "react-ga";

const TRACKING_ID = "G-KKFWDF1PY1";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Route component={Footer} />
      </>
    </BrowserRouter>
  );
};

export default App;
