import './App.css';
import Boxes from './components/Boxes/Boxes';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import modOneData from './data/m1.js';
import modTwoData from './data/m2.js';
import modThreeData from './data/m3.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/m1">
            <Navigation title={modOneData.category} module={modOneData.module} />
            <Boxes data={modOneData}/>
          </Route>
          <Route exact path="/m2">
            <Navigation title={modTwoData.category} module={modTwoData.module} />
            <Boxes data={modTwoData} />
          </Route>
          <Route exact path="/m3">
            <Navigation title={modThreeData.category} module={modThreeData.module} />
            <Boxes data={modThreeData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
