import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Inicio from "./components/Inicio/Inicio";
import Personaje from "./components/Personaje/Personaje";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/Personaje/:Id">
          <Personaje />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
