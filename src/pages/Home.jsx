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
      <p>
        I'm Jacob C. Sometimes I go by <a href="https://www.merriam-webster.com/dictionary/jink" target="_blank" rel="noopener noreferrer">jiink</a> online.
        For a long time I've enjoyed programming and software engineering,
        and I like it when there's a tangible effect.
        I also think it's a really fun challenge to work around limited computing resources.
      </p>
      <h2>Personal projects</h2>
      <p>I've done these things for fun:</p>
      <div className="project-card" onClick={() => window.location.href = '/projects/esp32-desk-led-board'}>
        <h3>ESP32 Desk LED Board</h3>
        <img className='thumbnail' src="./src/assets/led-board-thumb.jpg" alt="ESP32 Desk LED Board" />
      </div>
      <div className="project-card" onClick={() => window.location.href = '/projects/incrediplotter'}>
        <h3>The Incrediplotter</h3>
        <img className='thumbnail' src="./src/assets/led-board-thumb.jpg" alt="The Incrediplotter" />
      </div>
      <p>There are more writeups I would like to make in the future.</p>
      <p>
        Is there something in particular I've worked on that you'd like me to write a post on? Please let me know!
        If there's a project listing that doesn't have details inside, I'd still be happy to talk about it.
      </p>
      <p className="read-the-docs">
        Find this site's source on <a href="https://github.com/jiink/Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </>
  );
}

export default Home;