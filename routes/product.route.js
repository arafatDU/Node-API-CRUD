const express = require('express');
const router = express.Router();
const {getAllProducts, getProduct, addProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')




router.get('/', getAllProducts);
router.post('/', addProduct);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);




module.exports = router;
