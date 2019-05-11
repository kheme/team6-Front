import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthGuard from "./HOCs/AuthGuard";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={DefaultLayout} />
      </Switch>
    </Router>
  );
}

export default App;
