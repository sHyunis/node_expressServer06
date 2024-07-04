const express = require('express');
const router = express.Router();
const {
    getCarts,
    createCart,
    deleteCart,
    updateCart,
    getParamCart
} = require('../controllers/carts.js')

router.route('/').get(getCarts)
    .post(createCart)
    .delete(deleteCart)
    .put(updateCart)

router.route('/:cartid').get(getParamCart)

module.exports = router;