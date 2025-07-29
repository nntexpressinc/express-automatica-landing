import React from "react";
import "./index.css";

const BurgerMenu = ({ handleOpenMenu, isOpen }) => {
  return (
    <label className="burger" htmlFor="burger">
      <input 
        onChange={handleOpenMenu} 
        checked={isOpen} 
        type="checkbox" 
        id="burger" 
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default BurgerMenu;
