const express = require('express');
const errorsController = require('../controllers/errorsController')
const router = express.Router();

router.get('*', errorsController.getErrorPage);

module.exports = router;