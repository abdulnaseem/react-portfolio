import React from 'react';
import logo from './assets/newlogo3.png';
import './App.css';
import Navigation from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import UniversityProjects from './pages/universityProjects';
import Footer from './components/footer.js';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
            Home
          </Route>
          <Route exact path='/university-projects' element={<UniversityProjects />}>
            University Projects
          </Route>
          <Route exact path='/about' element={<About />}>
            About
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
