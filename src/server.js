import express from 'express';
import ejs from 'ejs';
import Promise from 'bluebird';
import 'babel-polyfill';
import bodyParser from 'body-parser';

module.exports = () => {
  const app = express();
  const savedGame = {board: [...Array(3)].map(() => Array(3).fill(''))};

  app.use(bodyParser.json());
  app.get('/api/game', async (req, res) => {
    //savedGame.board[0][0] = 'X';
    await new Promise(resolve => setTimeout(resolve, 1000));
    res.json(savedGame);
  });

  app.post('/api/game', async (req, res) => {
    savedGame.board = req.body.board;
    await new Promise(resolve => setTimeout(resolve, 1000));
    res.sendStatus(200);
  });

  app.get('/', async (req, res) => {
    const templatePath = './src/index.ejs';
    const data = {
      title: 'Wix Full Stack Project Boilerplate',
      staticsBaseUrl: 'http://localhost:3200/',
      baseurl: 'http://localhost:3000/',
      locale: 'en'
    };

    const renderFile = await Promise.promisify(ejs.renderFile, {context: ejs});

    const htmlData = await renderFile(templatePath, data);

    res.send(htmlData);
  });

  return app;
};
