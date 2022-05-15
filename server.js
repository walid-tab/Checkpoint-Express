const express = require("express");
const moment = require("moment");
const path = require("path");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});
if (
    moment().day() >= 1 &&
    moment().hours() >= 9 &&
    moment().day() <= 5 &&
    moment().hours() <= 17
) {
   app.use(express.static("public"));
} else {
  app.get("*", (req, res) => {
    res.status(404);
    res.send(
      "<h1>The web application is only available in working time (Monday to Friday,  from 9h to 17h) </h1>"
    );
  });
}

app.listen(port, () => {
  console.log(`the server is running on port:http://localhost:${port}`);
});