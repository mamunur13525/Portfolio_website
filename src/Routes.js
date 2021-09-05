import React from "react";
import {   Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Tips from "./components/Tips/Tips";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/tips">
        <Tips />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
};

export default Routes;
