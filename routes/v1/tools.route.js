const express = require("express");
const toolsController = require("../../controlar/tools.controlar");
const viewCount = require("../../middleware/veiwCount");

const router = express.Router();

router.route("/").get(viewCount,toolsController.getAllTolls);

module.exports = router;
