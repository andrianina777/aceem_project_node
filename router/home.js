const express = require('express');
const path = require("path");
const fs = require('fs');
const router = express.Router();
const urlConfig = require('../config/url');

router.get("/", function(req, res) {
  res.sendFile(path.resolve('src/index.html'));
});
router.get("/dashboard", function(req, res) {
  res.sendFile(path.resolve('src/template/dashboard.html'));
});

module.exports = router;