import React from "react";
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Routes, Route, HashRouter } from 'react-router-dom'; 
{/* importing Landing Page */}
import Header from './components/header/Header';
import LandingPage from './components/pages/Landing';
import About from './components/pages/About';
import './App.css'

function App() {

  return (
    <>
      <HashRouter> {/* So that the homepage is "Landing"*/}
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
