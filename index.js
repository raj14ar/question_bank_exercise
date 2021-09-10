// require the express
const express = require("express");
// specify the port
const port = 8000;
// require mongoose
const db = require("./config/mongoose");
//  create object of express class(puts new Express application inside the app)
const app = express();
// middleware for body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// middleware to navigate to the specific routes
app.use("/", require("./routes"));

// express to listen to the specified port number
app.listen(port, function (err) {
  if (err) {
    console.log("Error in running server", err);
    return;
  }
  console.log("Server is running on port", port);
});
