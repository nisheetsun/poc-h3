var express = require('express');
const { bikes } = require('../controllers/bikesOldController');
var router = express.Router();

/* GET users listing. */
router.get('/', bikes);

module.exports = router;
