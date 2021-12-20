const express = require("express");
const upload = require("../../modules/awsUpload");

const router = express();
const {
  getAll,
  getOne,
  create,
  update,
  dislike,
  like,
  addComment,
} = require("../../controller/boardController");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", upload.single("img"), create);
router.post("/comment/:boardId", addComment);
router.put("/like/:boardId", like);
router.put("/dislike/:boardId", dislike);
module.exports = router;
