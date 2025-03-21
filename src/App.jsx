import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/darkastro.png'
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Esp32DeskLedBoard from './pages/Esp32DeskLedBoard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/esp32-desk-led-board" element={<Esp32DeskLedBoard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App