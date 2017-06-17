const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// app.set('trust proxy', 'loopback');

app.get('/', function(req, res) {
  // const IP = req.headers['x-forwarded-for']
  console.log(req.headers);
  const IP = req.ips;
  console.log(IP);
  res.send(IP);
});

app.listen(PORT, function() {
  console.log(`app is listening on port ${PORT}`);
});
