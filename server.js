const express = require("express")
const app = express();
const port = 3000;
const drinks = require('./database');

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
  });

  app.set('view engine', 'ejs');
  app.get('/drinks', (req, res) => {
    res.render('index', { drinks: drinks });
  });
  



app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
  });