const userModel = require("../models/user");
const { create } = require("../modules/jwtModule");
const { encrypt, compare } = require("../modules/cryptoModule");
const userController = {
  signup: async (req, res) => {
    const { email, password, nickname, age, gender } = req.body;
    const findUserInfo = await userModel.findOne({ email });
    if (findUserInfo) {
      return res.status(400).json({
        message: "이미 존재하는 아이디 입니다.",
      });
    }
    const { salt, hashed } = await encrypt(password);
    console.log(salt, hashed);
    const user = new userModel({
      email,
      password: hashed,
      nickname,
      age,
      gender,
      createAt: Date.now(),
      salt,
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
      const user = await userModel.findOne({ email });
      if (user) {
        const comparePassword = await compare(password, user.salt);
        if (user.password === comparePassword) {
          const accessToken = create({ id: user.id });
          res.status(200).json({
            message: "로그인에 성공했습니다.",
            accessToken,
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
  getUser: (req, res) => {
    if (!req.user) {
      return res.status(400).json({
        message: "유저 정보가 없습니다.",
      });
    }
    res.status(200).json({
      user: req.user,
    });
  },

  updateUser: async (req, res) => {
    const { id } = req.params;
    const { nickname, age } = req.body;
    let image = req.user.image;
    if (req.file) {
      image = req.file.location;
    }
    try {
      await userModel.findByIdAndUpdate(id, {
        nickname,
        age,
        image,
      });
      res.status(200).json({
        message: "유저 정보 수정 완료!",
        image,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
};

module.exports = userController;
