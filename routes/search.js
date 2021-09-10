//require express
const express = require("express");
//create the object of router
const router = express.Router();

const searchController = require("../controllers/search_controller");

//handle the request for /add-task and navigate to create_controller
router.get("/", searchController.search);

module.exports = router;
