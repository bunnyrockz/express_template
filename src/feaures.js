//API call using https
/*
const https = require("https");
app.get("/quote", (req, res) => {
  const API = "https://api.quotable.io/random";
  https.get(API, (response) => {
    response.on("data", (data) => {
      var quote = JSON.parse(data);
      console.log(quote);
      res.send(quote);
    });
  });
});
*/

//Params In URL
//(eg: localhost:3000/hello/rajan => Output => Hey Mr rajan)
/*
app.get("/hello/:name", (req, res) => {
    res.send(`Hey Mr ${req.params.name}`);
  });
*/
