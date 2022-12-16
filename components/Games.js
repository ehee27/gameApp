import React from 'react';

const Games = ({games}) => {

  return (
    <>
    <button onClick={() => console.log('view games clicked')}>VIEW GAMES</button>
    <ul>
      {games.map(game => {
        return (
          <li key={game.id}>
            TITLE: {game.name} - GENRE: {game.genre} - SYSTEM: {game.system}
          </li>
          );
        })
      }
    </ul>
    </>
  )
}

export default Games;