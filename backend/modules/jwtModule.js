const { secretKey } = require("../config/jwtConfig.json");
const jwt = require("jsonwebtoken");

const jwtModule = {
  create: (payload) => {
    //option을 아래와 같이 주려면 payload값이 {}형태여야 sign이 됨
    const option = {
      algorithm: "HS256",
      expiresIn: "30d",
      issuer: "leejuhyeok",
    };

    const token = jwt.sign(payload, secretKey, option);
    return token;
  },
  verify: (token) => {
    try {
      const decode = jwt.verify(token, secretKey);
      return decode;
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        console.log("expired token");
        return -1;
      } else if (error.name === "JsonWebTokenError") {
        console.log("invalid token");
        return -2;
      } else {
        console.log("jwt not active");
        return -3;
      }
    }
  },
};

module.exports = jwtModule;
