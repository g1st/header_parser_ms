const express = require('express');
const router = express.Router();

const headerParser = require('../header-parser/parser.js');

router.get('/api/whoami', headerParser.parse);
router.get('/api', headerParser.parse);

// its not an api request - render index from views
router.get('*', (req, res) => {
  const url = req.protocol + '://' + req.get('host');
  res.render('index', {title: 'Request Header Parser Microservice', url: url});
});

module.exports = router;
