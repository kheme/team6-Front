import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthGuard from "./HOCs/AuthGuard";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";



function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      
      <Route path="/users/" component={AuthGuard(Dashboard)} />
    
    </Router>
  );
}

export default App;
