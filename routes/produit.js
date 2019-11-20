const path = require('path');

const express = require('express');

const ProduitControllers= require('../controllers/produitController');

const router = express.Router();

router.get('/produits/:produitId', ProduitControllers.getProduit);
module.exports = router;