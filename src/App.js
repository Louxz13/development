import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomeForm from "./components/HomeForm";
import CalendaryForm from "./components/CalendaryForm";
import ContactForm from "./components/ContactForm";
import AboutForm from "./components/AboutForm";
//import SignUpForm from "./components/SignUpForm";
import NavBar from './components/navbar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/HomeForm" element={<HomeForm />} exact/>
        <Route path="/CalendaryForm" element={<CalendaryForm />} exact/>
        <Route path="/ContactForm" element={<ContactForm />} exact/>
        <Route path="/AboutForm" element={<AboutForm />} exact/>
      </Routes>
    </BrowserRouter>
  );
};

export default App