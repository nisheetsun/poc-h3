var express = require('express');
const { bikes } = require('../controllers/bikesControllers');
var router = express.Router();

/* GET users listing. */
router.get('/', bikes);

module.exports = router;
