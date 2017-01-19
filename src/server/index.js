/* eslint-disable no-console */
require('./api');
const express = require('express');
const path = require('path');

const CLIENT_PORT = 3000;
const app = express();
app.use(express.static(path.resolve(__dirname, '../../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(CLIENT_PORT, () => {
  console.log(`[Frontend] listening to port ${CLIENT_PORT}`);
});
