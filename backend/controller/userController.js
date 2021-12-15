const userModel = require("../models/user");

const userController = {
  signup: async (req, res) => {
    const { email, password, nickname, age, gender } = req.body;
    const findUserInfo = await userModel.findOne({ email });
    // null or userInfo{}
    // false // true
    if (findUserInfo) {
      return res.status(400).json({
        message: " 이미 존재하는 아이디입니다.",
      });
    }
    const user = new userModel({
      email,
      password,
      nickname,
      age,
      gender,
      createAt: Date.now(),
    });

    try {
      const userData = await user.save();
      res.status(200).json({
        message: "유저 생성 완료",
        data: userData,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  signin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email: email }); //앞에가 db

      if (user) {
        if (user.password === password) {
          res.status(200).json({
            message: "로그인에 성공했습니다.",
          });
        } else {
          res.status(401).json({
            message: "비밀번호가 틀렸습니다.",
          });
        }
      } else {
        res.status(400).json({
          message: "해당하는 유저가 없습니다.",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
};

module.exports = userController;
