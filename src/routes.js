const express = require('express');
const router = express.Router();
const utils = require('./utils');

router.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: utils.getTimestamp(),
    environment: process.env.NODE_ENV || 'development'
  });
});

module.exports = router;