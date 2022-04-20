import React, {useState} from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './LoginForm';
import HomeForm from "./components/HomeForm";
import CalendaryForm from "./components/CalendaryForm";
import ContactForm from "./components/ContactForm";
import AboutForm from "./components/AboutForm";
//import SignUpForm from "./components/SignUpForm";
import NavBar from './components/navbar/NavBar';

function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
 
  const [user,setUser] = useState({name:"",email:""});
  const [error, setError] = useState("");
 
  const Login = details => {
    console.log(details);
 
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
     } else {
       console.log("Details do not match");
       setError("Details do not match");
     }
  }

  return (
    <div className="App">
   {(user.email != "") ? (

    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/HomeForm" element={<HomeForm />} exact/>
        <Route path="/CalendaryForm" element={<CalendaryForm />} exact/>
        <Route path="/ContactForm" element={<ContactForm />} exact/>
        <Route path="/AboutForm" element={<AboutForm />} exact/>
      </Routes>
    </BrowserRouter>

    ) : (
      <LoginForm Login={Login} error={error}/> 
    )}
  </div>
  );
};

export default App