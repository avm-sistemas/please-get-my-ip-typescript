const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send(`{ "ip" : "${ip}" }`);
});

app.listen(9977, () => {
  console.log('Server listening on port 9977');
});
