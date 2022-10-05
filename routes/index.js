var express = require('express');
var router = express.Router();
const controller = require("../Controller/indexController")

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
