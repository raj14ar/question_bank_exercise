// require express
const express = require("express");
// require router
const router = express.Router();

//handle the request for / and navigate to home_controller
router.get("/", (req, res) =>
  res.send("<h1>AdmitKard Question Bank Exercise</h1>")
);

//handle /insert url
router.use("/insert", require("./create"));

//handle /search url
router.use("/search", require("./search"));

module.exports = router;
