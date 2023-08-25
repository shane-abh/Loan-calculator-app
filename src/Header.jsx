import React, { useContext, useState } from "react";
import "./css/Header.css";
import logo from './assets/lgo2.png' 

import {ThemeContext} from './App'

const Header = ({set}) => {
  
  
  const {mode, toggleMode} = useContext(ThemeContext)
 



  console.log(mode)
 
  return (
    
      <header className={`Header ${mode? 'light' : 'dark'}`}>
        <img src={logo} className="Logo" alt="logo" id="logo" name="logo" />
        <label htmlFor="logo">Loan Calculator</label>
        <nav className={`Nav ${mode? 'light' : 'dark'}`}>
         
        <button onClick={toggleMode} className={`${mode? 'dark' : 'light'}`}>{mode? "Dark Mode":"Light Mode"}</button>
        </nav>
      </header>
    
  );
};

export default Header;
