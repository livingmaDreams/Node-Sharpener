
const express = require('express');
const router = express.Router();

const expTrackerController = require('../controllers/exptracker')

router.get('/',expTrackerController.getDetails);
router.post('/detail',expTrackerController.postDetails);
router.delete('/delete/:id',expTrackerController.deleteDetail);
router.get('/edit/:id',expTrackerController.editDetail);

module.exports = router;

