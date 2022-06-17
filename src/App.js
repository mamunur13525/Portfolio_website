import React from "react";
import "./App.css";
import Sidebar from "./components/Share/Sidebar";
// import PageLoading from "./components/Share/PageLoading";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (
    <Router>
      <Sidebar />
      <Routes />
    </Router>
  );
}

export default App;
