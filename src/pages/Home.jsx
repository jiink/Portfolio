import React from 'react';
import { Link } from "react-router-dom";
import viteLogo from '../assets/darkastro.png'; // Adjust the path if necessary

function Home() {
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Avatar" />
      </div>
      <h1>Jacob C's Portfolio</h1>
      <h2>Personal projects</h2>
      <div className="project-card" onClick={() => window.location.href = '/projects/esp32-desk-led-board'}>
        <h3>ESP32 Desk LED Board</h3>
        <img className='thumbnail' src="./src/assets/led-board-thumb.jpg" alt="ESP32 Desk LED Board" />
      </div>
      <p className="read-the-docs">
        Find this site's source on <a href="https://github.com/jiink/" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </>
  );
}

export default Home;