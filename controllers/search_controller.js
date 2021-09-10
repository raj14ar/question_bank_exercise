// require express
const express = require("express");
//  create object of express class(puts new Express application inside the app)
const app = express();
// require mongoose
const db = require("../config/mongoose");
const QuestionBank = require("../models/question_bank");
const similarity = require("../config/similarity");
// search question in question bank database
module.exports.search = async function (req, res) {
  try {
    // filter items which are not necessary to send to user
    const filterItem = {
      createdAt: false,
      updatedAt: false,
      _id: false,
    };
    //check if passed search term is string or not
    if (!typeof req.query.Passed_String === "string") {
      return res.status(400).json({
        message: `Invalid Passed_string, Please enter a valid string`,
      });
    } else {
      // remove all the extra spaces of search term
      req.query.Passed_String = req.query.Passed_String.replace(
        /\s+/g,
        " "
      ).trim(" ");
    }
    // fetching result from database if either part of Query or Tags is matching with the search term
    const result = await QuestionBank.find(
      {
        $or: [
          { Query: { $regex: req.query.Passed_String, $options: "i" } },
          { Tags: { $regex: req.query.Passed_String, $options: "i" } },
        ],
      },
      filterItem
    );
    // removing all the spaces of search term to calculate the similarity percentage
    const passsed_string_lowercase = req.query.Passed_String.replace(
      / /g,
      ""
    ).toLowerCase();
    // sort the result in descending order based on the similarty percentage(frequency of matched words in Query)
    const sortedResult = result
      .map((obj) => {
        obj.similarity = similarity.calculateSimilarity(
          obj.Query,
          passsed_string_lowercase
        );
        return obj;
      })
      .sort((a, b) => {
        if (a.similarity > b.similarity) {
          return -1;
        }
        if (a.similarity < b.similarity) {
          return 1;
        }
        return 0;
      });
    // send the sorted data
    return res.status(200).json({
      data: sortedResult,
    });
    //handle the error case
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching search result ${error.message}`,
    });
  }
};
