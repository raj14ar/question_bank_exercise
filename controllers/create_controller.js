const duplicateCheck = require("../config/duplicateCheck");
const QuestionBank = require("../models/question_bank");
// create and add new task in todo list database
module.exports.create = async function (req, res) {
  //basic validation to check if Query and Topic are string and Tags is array or not
  if (
    typeof req.body.Query === "string" &&
    typeof req.body.Topic === "string" &&
    Array.isArray(req.body.Tags)
  ) {
    // check if Query is string, not number passed as string
    if (!isNaN(req.body.Query)) {
      return res.status(400).json({
        message: `Invalid Query, Please enter a valid string Query`,
      });
    }
  } else {
    return res.status(400).json({
      message: `Invalid input, Query and Topic should be String and Tags should be an Array`,
    });
  }
  try {
    // check if question already exists or not
    await duplicateCheck.questionAlreadyExists(req, res);

    // insert question if it doesn't already exists
    const question = await QuestionBank.create({
      Query: req.body.Query,
      Topic: req.body.Topic,
      Tags: req.body.Tags,
    });
    if (question) {
      return res.status(200).json({
        message: "Question Sucessfully inserted",
      });
    }
    //handle error case
  } catch (error) {
    console.log(`Error in inserting the question! ${error.message}`);
    return res.status(400).json({
      message: `Error in inserting the question! ${error.message}`,
    });
  }
};
