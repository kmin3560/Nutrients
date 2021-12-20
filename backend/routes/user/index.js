var express = require("express");
var router = express.Router();
const { signin, signup, getUser } = require("../../controller/userController");
const { isLoggedIn } = require("../../modules/authModule");

router.get("/", isLoggedIn, getUser);
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
