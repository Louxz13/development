import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeForm from "./components/HomeForm";
import CalendaryForm from "./components/CalendaryForm";
import ContactForm from "./components/ContactForm";
import AboutForm from "./components/AboutForm";
//import SignUpForm from "./components/SignUpForm";
import NavBar from './components/navbar/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/home" component={HomeForm} exact>
          <HomeForm />
        </Route>
        <Route path="/calendary" component={CalendaryForm} exact>
          <CalendaryForm />
        </Route>
        <Route path="/contact" component={ContactForm} exact>
          <ContactForm />
        </Route>
        <Route path="/about" component={AboutForm} exact>
          <AboutForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default App