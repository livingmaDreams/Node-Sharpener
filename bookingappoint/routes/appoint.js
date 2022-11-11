const express = require('express');

const router = express.Router();

const appointController = require('../controllers/appoint');

router.get('/',appointController.getList);
router.post('/list',appointController.postList);
router.delete('/delete/:id',appointController.deleteId);
router.get('/edit/:id',appointController.getEditId);


module.exports = router;