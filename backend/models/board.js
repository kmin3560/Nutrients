const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  comment: [
    {
      text: {
        type: String,
        default: "",
      },
      writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      date: Date,
    },
  ],
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  createAt: Date,
  image: {
    type: String,
    default: "",
  },
});
module.exports = mongoose.model("board", boardSchema);
