

const express = require('express');
const router = express.Router();


const { contactusget, contactuspost }= require('../controllers/contactus');

router.get('/',contactusget)

   router.post('/success',contactuspost)

module.exports = router;