const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/games');

const VideoGame = conn.define('videogame', {
  name: STRING,
  genre: STRING,
  system: STRING
});


const syncAndSeed = async () => {
  await conn.sync({force: true});
  await Promise.all([
    VideoGame.create({name: 'Castlevania', genre: 'metroidvania', system: 'NES'}),
    VideoGame.create({name: 'Ninja Gaiden', genre: 'platformer', system: 'NES'}),
    VideoGame.create({name: 'Contra', genre: 'run n gun', system: 'NES'}),
    VideoGame.create({name: 'Super Mario Kart', genre: 'racing', system: 'SNES'}),
    VideoGame.create({name: 'Street Fighter 2', genre: 'fighting', system: 'SNES'}),
    VideoGame.create({name: 'Sonic The Hedgehog', genre: 'platformer', system: 'Sega Genesis'}),
    VideoGame.create({name: 'DOOM', genre: 'shooter', system: 'PC'}),
    VideoGame.create({name: 'Castlevania Symphony Of The Night', genre: 'metroidvania', system: 'PS1'}),
    VideoGame.create({name: 'Final Fantasy VII', genre: 'RPG', system: 'PS1'}),
    VideoGame.create({name: 'Tekken', genre: 'fighting', system: 'PS1'}),
    
  ]);
};


module.exports = {
  conn,
  VideoGame,
  syncAndSeed
}

