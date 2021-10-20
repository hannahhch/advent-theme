import './App.css';
import Boxes from './components/Boxes/Boxes';
import Navigation from './components/Navigation/Navigation';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import modOneData from './data/m1.js';
import modTwoData from './data/m2.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/m1">
            <Navigation title={modOneData.category}/>
            <Boxes data={modOneData}/>
          </Route>
          <Route path="/m2">
            <Navigation title={modTwoData.category}/>
            <Boxes data={modTwoData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
