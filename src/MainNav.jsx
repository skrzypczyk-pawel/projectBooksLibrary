import React, { useState } from 'react';

import Menu from './Menu.jsx'

import './styles/MainNav.css'

const MainNav = () => {

  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const toggleVisible = () => setIsVisibleMenu(!isVisibleMenu);

  const handleClick = () => {
    toggleVisible();
    }
  
  const showMenu = () => {
    if(isVisibleMenu) {
      return (
        <div className="showMenu">
          <Menu />
        </div>
      )
    }
  }



  return ( 
    <nav className="mNav">
     <button 
      className={ [isVisibleMenu ? "closeNav" : "openNav", "burger"].join(" ") }
      onClick={handleClick}
      />
      {showMenu()}
    </nav>
   );
}
 
export default MainNav;