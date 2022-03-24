import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";

import ReactGA from "react-ga";

const TRACKING_ID = "G-KKFWDF1PY1";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <>
      <Home />
      <Footer />
    </>
  );
};

export default App;
