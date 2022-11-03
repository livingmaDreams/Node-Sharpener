

const express = require('express');
const {getaddproduct,postaddproduct } = require('../controllers/products');

const router = express.Router();



router.get('/',getaddproduct)

router.post('/shop',postaddproduct)


module.exports = router;