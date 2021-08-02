import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
function App() {
  
  return (
  
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>         
          <Route path="/home">
            <Home/>
          </Route>         
          <Route path="/about">
            <About/>
          </Route>         
          <Route path="/skills">
            <Skills/>
          </Route>         
        </Switch>
      </Router>

  );
}

export default App;