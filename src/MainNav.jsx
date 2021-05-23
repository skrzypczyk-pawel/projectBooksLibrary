import React, { useState } from 'react';

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
          MENU
        </div>
      )
    }
  }



  return ( 
    <nav className="mNav">
      <button 
      className="menu"
      onClick={handleClick}
      />
      {showMenu()}
    </nav>
   );
}
 
export default MainNav;