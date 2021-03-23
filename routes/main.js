const express = require('express');
const wishesController = require('../controllers/wishesController');
const router = express.Router();

router.get('/', wishesController.getWishPage);
router.post('/', wishesController.postnewWish);
router.post('/delete', wishesController.deleteWish);

module.exports = router;