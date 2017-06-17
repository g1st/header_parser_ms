const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
  const IP = req.headers['x-forwarded-for'];
  // var IP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(IP);
  res.send(req.headers);
});

app.listen(PORT, function() {
  console.log(`app is listening on port ${PORT}`);
});
