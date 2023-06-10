const express = require("express")
const app = express();
const port = 3000;
const drinks = require('./database');

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
  });

app.set('view engine', 'ejs');

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

app.get('/drinks', (req, res) => {
    res.render('index', { drinks, capitalizeFirstLetter });
  });
  
  app.get('/drinks/:id', (req, res) => {
    const id = req.params.id;
    res.render('show', { drinks, id });
  });



app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
  });