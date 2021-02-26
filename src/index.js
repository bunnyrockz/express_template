//Assigning the Values
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;

/*
type npm install in terminal to download node_modules folder

nodemon command
nodemon src/index.js -e js,hbs

Git => working directory should be "express_template"
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

//Get values of Form and save it in | req.body |
app.use(express.urlencoded());

//Routing
app.get("/", (req, res) => {
  res.render("index", { title: "My Express Template" });
});

//404 Page
app.get("*", (req, res) => {
  res.status(404).render("404");
});

//Listening to Port
app.listen(port, () => {
  console.log(`Listening to Post ${port}`);
});
