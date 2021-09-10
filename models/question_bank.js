const mongoose = require("mongoose");

const questionBankSchema = new mongoose.Schema(
  {
    Query: {
      type: String,
      required: true,
    },
    Topic: {
      type: String,
      required: true,
      enum: ["qualifying-criteria", "top-colleges", "exams", "finance"],
    },
    Tags: [
      {
        type: String,
        required: true,
        enum: [
          "stanford-university",
          "usa",
          "admission",
          "engineering",
          "top",
          "medicine",
          "law",
          "australia",
        ],
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const questionBank = mongoose.model("questionBank", questionBankSchema);
module.exports = questionBank;
