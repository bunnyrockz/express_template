//Assigning the Values
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;

/*
nodemon command
nodemon src/index.js -e js,hbs
*/

/*
Git => pwd should be express_template
git add .
git commit -m "comments"
git push -u origin master
*/

// Path to Pages
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);
app.use(express.static(staticpath));

//Routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("*", (req, res) => {
  res.status(404).render("404");
});

//Listening to Port
app.listen(port, () => {
  console.log(`Listening to Post ${port}`);
});
