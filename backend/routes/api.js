const express = require('express');

const router = express.Router();

// const Models = require('../models/schema');

router.get('/', (req, res, next) => {
  res.send('RESTful API response');
});

module.exports = router;
