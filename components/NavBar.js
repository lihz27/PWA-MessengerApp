import React from 'react';

const NavBar = () => {
  return (
    <div>

      <button type='button' id='menu-button'>Menu</button>
      <style>{`
        #menu-button {
        float: right;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
