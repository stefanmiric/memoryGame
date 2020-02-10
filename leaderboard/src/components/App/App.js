import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import "./App.css";
import EntryList from "../EntryList";
import MenuBar from "../MenuBar";


const App = () => (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MenuBar} />
          <Route exact path="/leaderboard" component={EntryList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
  
export default App;