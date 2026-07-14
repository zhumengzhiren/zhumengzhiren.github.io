// client/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exercise from './pages/Exercise';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Publications from './pages/Publications/Publications';
import Resume from './pages/Resume';
import Home from './pages/Home/Home';
import Navbar from './Navbar';
import Preloader from "./pages/Pre/Preloader";
import FadeIn from "./pages/Effect/FadeIn";


function App() {
  const [load, updateLoad] = useState(true);
  window.addEventListener("scroll", FadeIn);
  window.addEventListener("resize", FadeIn);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
        <Preloader load={load}/>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
