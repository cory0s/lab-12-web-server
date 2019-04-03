'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('./index.html'));
app.get('*', (req, res) => {
  res.render('./index.html');
})

app.listen(PORT, () => {
  console.log('Web Server up on port', PORT);
});
