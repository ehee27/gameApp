import React from 'react';

const Nav = ({games}) => {

  return (
    <div>
    <nav>
      <a href="/">Home </a>
      <a href="/games">Games ({games.length})</a>
    </nav>
    </div>
  )
}

export default Nav;