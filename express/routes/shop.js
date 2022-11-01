

const express = require('express');
const { shopget } = require('../controllers/shop');

const router = express.Router();

router.get('/',shopget);


module.exports = router;