import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Proyectos } from './pages';
import NavBar from './components/NavBar';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen flex flex-col`}>
        <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </main>
        {/* <Footer isDarkMode={isDarkMode} />*/}
        
        
      </div>
    </Router>
  );
}

export default App;