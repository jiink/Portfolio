import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/darkastro.png'
import { Link, HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Esp32DeskLedBoard from './pages/Esp32DeskLedBoard';
import Incrediplotter from './pages/Incrediplotter';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/esp32-desk-led-board" element={<Esp32DeskLedBoard />} />
          <Route path="/projects/incrediplotter" element={<Incrediplotter />} />
        </Routes>
      </Router>
    </>
  )
}

export default App