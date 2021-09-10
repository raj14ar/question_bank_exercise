const QuestionBank = require("../models/question_bank");
module.exports.questionAlreadyExists = async function (req, res) {
  try {
    const result = await QuestionBank.find({});
    //remove all white spaces of Query passed and convert to lower case
    const Query = req.body.Query.replace(/ /g, "").toLowerCase();
    //check if question already exists or not
    result.forEach((obj) => {
      if (obj.Query.replace(/ /g, "").toLowerCase() === Query) {
        return res.status(409).json({
          message: `Question already exists`,
        });
      }
    });
    // handle error case
  } catch (error) {
    return res.status(500).json({
      message: `Error in checking if question already exists! ${error.message}`,
    });
  }
};
