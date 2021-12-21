const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male",
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  salt: {
    type: String,
    required: true,
  },
});
//첫번째 인수 collection 이름 기본이 복수형이라 users로 저장됨
module.exports = mongoose.model("user", userSchema);
