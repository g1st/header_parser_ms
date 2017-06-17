const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', function(req, res) {
  const header = headerParser(req.headers);
  console.log(header);
  res.send(header);
});

app.listen(PORT, function() {
  console.log(`app is listening on port ${PORT}`);
});

function headerParser(header) {
  const header_skeleton = {
    ipaddress: null,
    language: null,
    software: null
  };

  header_skeleton.ipaddress = header["x-forwarded-for"];
  return header_skeleton;
}
