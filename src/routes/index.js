const express = require('express');
const temasRouter = require('./temas.router');
const router = express.Router();

// colocar las rutas aquí
router.use(temasRouter);

module.exports = router;