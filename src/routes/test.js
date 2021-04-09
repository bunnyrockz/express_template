const express = require("express");
const testcontroller = require("./../controllers/test");

const router = express.Router();
router.route("/").get(testcontroller);

module.exports = router;
