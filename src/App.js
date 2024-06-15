import React from 'react';
import './App.css';
import Calculator from './components/calculator/Calculator';
import ToDo from './components/todo/ToDo';
import Portfolio from './components/Portfolio/Portfolio';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideNavOnHome = location.pathname !== '/';

  const handleLinkClick = (path) => (event) => {
    event.preventDefault();
    window.open(path, '_blank');
  };

  return (
    <>
      {!hideNavOnHome && (
        <div className='nav-container'>
          <div className='header'>
            <h2>My React Projects</h2>
          </div>
          <nav className='nav'>
            <a href="/calculator" onClick={handleLinkClick("/calculator")} className='nav-items'>Calculator</a>
            <a href="/to-do" onClick={handleLinkClick("/to-do")} className='nav-items'>To-Do</a>
            <a href="/portfolio" onClick={handleLinkClick("/portfolio")} className='nav-items'>Portfolio Page</a>
          </nav>
        </div>
      )}

      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/to-do" element={<ToDo />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;












