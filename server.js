const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const router = require('./routes/router');

app.use(express.static('public'));

app.use('/', router);

app.set('view engine', 'pug');

app.listen(PORT, function() {
  console.log(`app is listening on port ${PORT}`);
});
