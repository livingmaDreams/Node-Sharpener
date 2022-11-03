

const express = require('express');
const { shopget } = require('../controllers/products');

const router = express.Router();

router.get('/',shopget);


module.exports = router;