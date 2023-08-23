import React, { useState } from "react";
import "./css/Header.css";
import logo from './assets/react.svg' 

const Header = () => {
  const [mode, setMode] = useState(true);

  const handleClick = () => {
    setMode(!mode);
  };
  return (
    
      <header className={`Header ${mode? 'light' : 'dark'}`}>
        <img src={logo} className="Logo" alt="logo" />
        <nav className={`Nav ${mode? 'light' : 'dark'}`}>
          <a href="#">Home</a>
          <a href="#">Loan Calculator</a>
          <a href="#">About Us</a>
        <button onClick={handleClick}>Click Me</button>
        </nav>
      </header>
    
  );
};

export default Header;
