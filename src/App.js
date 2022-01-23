import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/pdf/cv";
import Hackathon from "./components/Hackathon/Hackathon";
import ProjectIntegrateur from "./components/ProjectIntegrateur/ProjectIntegrateur";
import CapteurGaz from "./components/CapteurGaz/CapteurGaz";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
import Home2 from "./components/Home/Home2";
import hackathon from "./components/Hackathon/Hackathon";
import  InnovativeSmartSystem from './components/InnovativeSmartSystem/InnovativeSmartSystem';
import Smartdevice from "./components/InnovativeSmartSystem/SmartSystem";
import Middleware from "./components/InnovativeSmartSystem/Middleware";
import Protocole_communication from "./components/InnovativeSmartSystem/ProtocoleDeCommunication";
import BigData from "./components/InnovativeSmartSystem/BigData";
import Innovation from "./components/InnovativeSmartSystem/Innovation";
import Projet from "./components/InnovativeSmartSystem/Projet_Innovateur";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/Portfolio" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/hackathon" component={Hackathon} />
          <Route path="/projetintegrateur" component={ProjectIntegrateur} />
          <Route path="/capteurgaz" component={CapteurGaz} />
          <Route path="/ISS" component={InnovativeSmartSystem} />
          <Route path="/Smartdevice" component={Smartdevice} />
          <Route path="/Middleware" component={Middleware} />
          <Route path="/Protocole_de_Communication" component={Protocole_communication} />
          <Route path="/BigData" component={BigData} />
          <Route path="/Innovation" component={Innovation} />
          <Route path="/Projet" component={Projet} />

          

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
