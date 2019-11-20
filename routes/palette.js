const path = require('path');

const express = require('express');

const paletteController= require('../controllers/paletteController');

const router = express.Router();


//router.get('/palletes/:palettesId', paletteController.getPalette());

router.post('/Palette', paletteController.postPalette);

module.exports = router;
