import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navmenu from './components/Navmenu';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import SmoothScrollBar from './components/SmoothScrollBar';

export default function App() {
  return (
    <>
      <Router>
        <Navmenu />
        <SmoothScrollBar>
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Project">
              <Project />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollBar>
      </Router>
    </>
  );
}
