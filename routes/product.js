const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

router.get('/', productController.getProducts);
router.post('/add-product', productController.postProduct);
router.post('/update-product', productController.postUpdateProduct);

module.exports = router;
