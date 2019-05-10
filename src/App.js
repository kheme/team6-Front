import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthGuard from "./HOCs/AuthGuard";
import Dashboard from "./Pages/Dashboard";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={AuthGuard(Users)} />
      <Route path="/signin/" component={Dashboard} />
    </Router>
  );
}

export default App;
