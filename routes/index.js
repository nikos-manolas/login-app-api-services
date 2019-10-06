const express = require('express');
const router = express.Router();
const home = require('./home');
const login = require('./login');
const repositories = require('./repositories');

router.get('/', home);
router.get('/repositories/:username', repositories);
router.post('/login', login);

module.exports = router;