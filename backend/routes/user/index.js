var express = require("express");
var router = express.Router();
const upload = require("../../modules/awsUpload");
const {
  signin,
  signup,
  getUser,
  updateUser,
} = require("../../controller/userController");
const { isLoggedIn } = require("../../modules/authModule");

router.get("/", isLoggedIn, getUser);
router.post("/signup", signup);
router.post("/signin", signin);
router.put("/:id", isLoggedIn, upload.single("img"), updateUser);
module.exports = router;
