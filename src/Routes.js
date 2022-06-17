import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Tips from "./components/Tips/Tips";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import CustomSwitch from "./CustomSwitch";
import { useLocation } from "react-router-dom";


const Routes = () => {
  const [progress, setProgress] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setProgress(true)
  }, [pathname])
  return (
    <CustomSwitch progress={progress} setProgress={setProgress}>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/tips" component={Tips} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </CustomSwitch >

  );
};

export default Routes;
