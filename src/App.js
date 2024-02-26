
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import ProjectDetails from "./components/Project Details/ProjectDetails"
import { HashRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path='/Project/:id' element={<ProjectDetails/>}/>
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
/*<ToastContainer />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />*/