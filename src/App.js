import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
// Components
import Gallery from './components/Gallery'
import NavBar from './components/NavBar'
import ScrollToTop from './components/ScrollToTop'
import Overview from './components/Overview'
import Home from './components/Home'
import Contact from './components/Contact'
import Blog from './components/blog/Blog.js'
import LightingEffects from './components/blog/LightingEffects.js'
function App() {
  return (
    <Router   >
    <ScrollToTop/>
    <Route exact path="/">
    <Home/>
    </Route>
     <Switch>
      <Route exact path="/overview">
        <Overview/>
      </Route>
      <Route exact path="/gallery">
        <Gallery/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
      <Route exact path="/blog">
        <Blog/>
        </Route>
        <Route exact path="/blog/lighting-effects">
          <LightingEffects/>
      </Route>
     </Switch>
    </Router>

  );
}

export default App;
