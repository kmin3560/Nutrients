const express = require("express");
const upload = require("../../modules/awsUpload");
const { isLoggedIn } = require("../../modules/authModule");

const router = express();
const {
  getAll,
  getOne,
  create,
  update,
  dislike,
  like,
  addComment,
  getUserAll,
  deleteComment,
} = require("../../controller/boardController");

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/user/:userId", getUserAll);
router.post("/", isLoggedIn, upload.single("img"), create);
router.post("/comment/:boardId", isLoggedIn, addComment);
router.post("/like/:boardId", isLoggedIn, like);
router.post("/dislike/:boardId", isLoggedIn, dislike);
router.delete("/:boardId", isLoggedIn, deleteComment);
module.exports = router;
