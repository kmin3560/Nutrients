const boardModel = require("../models/board");

const boardController = {
  create: async (req, res) => {
    const { title, body, writer, createAt } = req.body;
    let image = "";
    if (req.file) {
      image = req.file.location;
    }
    const post = new boardModel({
      title,
      text: body,
      image,
      writer,
      createAt,
    });
    try {
      const postData = await post.save();
      res.status(200).json({
        message: "게시물 생성 완료",
        post: postData,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const posts = await boardModel
        .find()
        .populate("writer")
        .populate({
          path: "comment",
          populate: {
            path: "writer",
          },
        })
        .sort("-createAt");
      res.status(200).json({
        message: "데이터 조회 성공",
        posts,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await boardModel.findById(id).populate({
        path: "comment",
        populate: {
          path: "writer",
        },
      });
      res.status(200).json({
        message: "게시물 조회 성공",
        post,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB서버 에러",
      });
    }
  },

  update: (req, res) => {},

  deleteComment: async (req, res) => {
    const { boardId } = req.params;
    try {
      await boardModel.findByIdAndRemove(boardId);
      res.status(200).json({
        message: "삭제 완료!",
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },

  like: async (req, res) => {
    const { userId } = req.body;
    const { boardId } = req.params;
    try {
      await boardModel.findByIdAndUpdate(boardId, { $push: { like: userId } });
      res.status(200).json({
        message: "좋아요 성공!",
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  dislike: async (req, res) => {
    const { userId } = req.body;
    const { boardId } = req.params;

    try {
      await boardModel.findByIdAndUpdate(boardId, { $pull: { like: userId } });
      res.status(200).json({
        message: "좋아요 취소!",
      });
    } catch {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },

  addComment: async (req, res) => {
    const { text, userId, date } = req.body;
    const { boardId } = req.params;

    try {
      await boardModel.findByIdAndUpdate(boardId, {
        $push: { comment: { text, writer: userId, date } },
      });
      res.status(200).json({
        message: "댓글 작성 완료!",
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  getUserAll: async (req, res) => {
    try {
      const { userId } = req.params;
      const posts = await boardModel
        .find({ writer: userId })
        .populate("writer")
        .populate({
          path: "comment",
          populate: {
            path: "writer",
          },
        })
        .sort("-createAt");
      if (posts) {
        res.status(200).json({
          message: "게시물 조회 성공!",
          posts,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
};

module.exports = boardController;
