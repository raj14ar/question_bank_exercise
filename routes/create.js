//require express
const express = require("express");
//create the object of router
const router = express.Router();

const createController = require("../controllers/create_controller");

//handle the request for /add-task and navigate to create_controller
router.post("/", createController.create);

module.exports = router;
