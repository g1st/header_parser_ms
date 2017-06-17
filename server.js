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

  // IP address
  header_skeleton.ipaddress = header["x-forwarded-for"];

  // the most preffered language is first one
  header_skeleton.language = header["accept-language"].split(',')[0];

  // first parantheses identifies software being used (?)
  header_skeleton.software = header["user-agent"].match(/\((.+?)\)/)[1];

  return header_skeleton;
}
