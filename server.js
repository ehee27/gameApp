const express = require('express');
const { conn, VideoGame, syncAndSeed } = require('./db/games')
const { static } = express;
const path = require('path');

const app = express();

app.use('/dist', static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/games', async (req, res, next) => {
  try {
    res.send(await VideoGame.findAll());
  } 
  catch (error) {
    next(error)
  }
});

app.post('/api/games', async (req, res, next) => {
  try {
    res.send(await VideoGame.createRandomUser());
  } 
  catch (error) {
    next(error)
  }
});

const init = async () => {
  try {
    await conn.authenticate();
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  } 
  catch (error) {
    console.log(error)
  }
}


init();