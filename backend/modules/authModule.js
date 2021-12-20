const { verify } = require("./jwtModule");
const userModel = require("../models/user");
const authModule = {
  isLoggedIn: async (req, res, next) => {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
      res.status(409).json({
        message: "토큰없음",
      });
    }

    const decode = verify(accessToken);

    if (decode === -1) {
      return res.status(408).json({
        message: "토큰이 만료되었습니다.",
      });
    } else if (decode === -2) {
      return res.status(407).json({
        message: "유효하지 않은 토큰입니다.",
      });
    } else if (decode === -3) {
      return res.status(406).json({
        message: "토큰 에러입니다.",
      });
    }

    try {
      const user = await userModel.findById(decode.id);
      req.user = {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        age: user.age,
        gender: user.gender,
        image: user.image,
      };
      next();
    } catch (error) {
      res.status(500).json({
        message: "DB서버 에러",
      });
    }
  },
};

module.exports = authModule;
