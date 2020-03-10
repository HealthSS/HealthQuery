const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/bundle.js'))
})


app.get('/coroni', (req, res) => {
  res.status(200).json('everybody run');
});

app.post('/coroni', (req, res) => {
  res.status(200).json('updated coronis')
});

app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
