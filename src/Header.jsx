import React, { useContext, useState } from "react";
import "./css/Header.css";
import logo from './assets/react.svg' 

import {ThemeContext} from './App'

const Header = ({set}) => {
  
  
  const {mode, toggleMode} = useContext(ThemeContext)
 



  console.log(mode)
 
  return (
    
      <header className={`Header ${mode? 'light' : 'dark'}`}>
        <img src={logo} className="Logo" alt="logo" />
        <nav className={`Nav ${mode? 'light' : 'dark'}`}>
          <a href="#">Home</a>
          <a href="#">Loan Calculator</a>
          <a href="#">About Us</a>
        <button onClick={toggleMode}>Click Me</button>
        </nav>
      </header>
    
  );
};

export default Header;
