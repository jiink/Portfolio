import React from 'react';
import { Link } from 'react-router-dom';

function Crankentimer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <h1>Crankentimer came close</h1>
      <p>Last edit: April 2026</p>
      
      <button onClick={scrollToTop}>Back to Top</button>
    </div>
  );
}

export default Crankentimer;