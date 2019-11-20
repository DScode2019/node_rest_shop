const path = require('path');

const express = require('express');

const ProductControllers= require('../controllers/productController');

const router = express.Router();

router.get('/products/:productId', ProductControllers.getProduct);

module.exports = router;