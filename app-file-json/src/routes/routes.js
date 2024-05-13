const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/salvar-dados', controller.salvarDados);

module.exports = router;
