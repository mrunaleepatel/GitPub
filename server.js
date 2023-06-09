const express = require("express")
const app = express();
const port = 3000;
const drinks = require('./database');

app.get('/drinks', (req, res) => {
  res.json(drinks);
});
  

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
  });




app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
  });