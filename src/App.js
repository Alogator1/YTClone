import React, {useState} from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Videos from "./components/Videos/Videos";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";


function App() {

  const [isHidden, setHidden] = useState(false);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Header changeHidden={setHidden} isHidden={isHidden}/>
          <div className="app_page">
            <Sidebar isHidden={isHidden}/>
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
