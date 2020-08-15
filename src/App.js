import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Videos from "./components/Videos/Videos";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <div className="app_page">
            <Sidebar />
            <Route path="/search">
              <Search></Search>
            </Route>
            <Route path="/" exact>
              <Videos />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
