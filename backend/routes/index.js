var express = require("express");
var router = express.Router();
const userRouter = require("./user");
const boardRouter = require("./board");

/* GET home page. */
router.use("/user", userRouter);
router.use("/board", boardRouter);

module.exports = router;
