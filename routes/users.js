var express = require('express');
var router = express.Router();
const controller = require("../Controller/UsersController")

/* GET users listing. */
router.get('/', controller.list);

router.get("/:id", controller.detail);

module.exports = router;
