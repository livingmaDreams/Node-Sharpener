

const express = require('express');
const { addproductget, addproductpost } = require('../controllers/products');

const router = express.Router();



router.get('/',addproductget)

router.post('/shop',addproductpost)


module.exports = router;